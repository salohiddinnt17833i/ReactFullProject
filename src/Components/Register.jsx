import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const username = useRef('');
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
        e.preventDefault();

        // Foydalanuvchi kiritgan ma'lumotlar
        const enteredUsername = username.current.value.trim();
        const enteredEmail = email.current.value.trim();
        const enteredPassword = password.current.value.trim();

        // Validatsiya
        if (enteredUsername === '' || enteredEmail === '' || enteredPassword === '') {
            alert('Iltimos, barcha maydonlarni to\'ldiring.');
            return;
        }

        // Email manzilining to'g'ri formatda kiritilganligini tekshirish
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(enteredEmail)) {
            alert('Iltimos, to\'g\'ri elektron pochta manzili kiriting.');
            return;
        }

        // Ma'lumotlarni saqlash
        const user = {
            name: enteredUsername,
            email: enteredEmail,
            password: enteredPassword
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Login sahifasiga o'tish
        navigate('/login');

        // tugallashdan oldin btnDisabled holatini o'zgartirish
        setBtnDisabled(false);
    }

    return (
        <div>
            <div style={{
                marginTop: '100px',
                maxWidth: '500px',
                width: '100%',
                margin: '0px auto'
            }}>
                <div className='card p-3 mt-5'>
                    <h2 className='text-center mb-4'>CREATE AN ACCOUNT</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input ref={username} type="text" className="form-control" id="name" placeholder='Name' />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input ref={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='User@gmail.com' />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Your Password</label>
                            <input ref={password} type="password" className="form-control" id="password" placeholder='***' />
                        </div>

                        <div className='text-center mb-3'>
                            <button disabled={btnDisabled} onClick={handleSave} className='btn btn-success w-25'>{btnDisabled ? 'Save...' : 'SAVE'}</button>
                        </div>

                        <div>
                            <p>Lorem, ipsum. <Link to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
