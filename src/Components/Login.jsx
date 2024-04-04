import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const email = useRef('');
  const password = useRef('');

  const [btnDisabled, setBtnDisabled] = useState(false);
  useEffect(() => {
    const justLoggedIn = JSON.parse(localStorage.getItem("logged"))
    if (!justLoggedIn) {
      localStorage.setItem("logged", JSON.stringify(true));
      window.location.reload();
    }
  }, []);

  function handleSave(e) {
    e.preventDefault()
    setBtnDisabled(true)
    const obj = {
      email: email.current.value,
      password: password.current.value
    }
    const logInHome = JSON.parse(localStorage.getItem(("user")))
    if (logInHome) {
      if (logInHome.email == obj.email && logInHome.password == obj.password) {
        localStorage.setItem('logged', JSON.stringify(true))
        navigate("/")
      } else {
        alert("wrong Email or Password")
      }
    } else {
      alert("Please, you need to sign up")
      navigate("/register")
    }

    setBtnDisabled(false)
  }

  return (
    <div>
      <div style={{
        marginTop: "100px",
        maxWidth: "500px",
        width: "100%",
        margin: "0px auto"
      }}>
        <div className='card p-3 mt-5'>
          <h2 className='text-center mb-4'>LOGIN</h2>
          <form>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input ref={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='User@gmail.com' />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Your Password</label>
              <input ref={password} type="password" className="form-control" id="password" placeholder='***' />
            </div>

            <div className='text-center mb-3'>
              <button disabled={btnDisabled} onClick={handleSave} className='btn btn-success w-25'>{btnDisabled ? "Save..." : "SAVE"}</button>
            </div>

            <div>
              <p>Lorem, ipsum. <Link to='/register'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login