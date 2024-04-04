import style from './all.module.css'
import cardImg from '../assets/cart/img.jpeg'
import './all.css'
import { Link } from 'react-router-dom'
import { useEffect, useTransition } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
function Cart() {
  useEffect(() => {

  }, [])
  const Mode = JSON.parse(localStorage.getItem("darkMode"))
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={Mode ? 'alll' : 'Dall'}>
        <div className={style.container}>
          <h2 className={Mode ? 'h1' : 'Dh1'}>{t("Shopping Cart")}</h2>
          <hr style={{ color: "black" }} />
          <div className='AllC'>
            <div>
              <img className="img" src={cardImg} alt="" />
            </div>
            <div>
              <h5 className={Mode ? 'text' : 'Dtext'}>Coffe Tabble</h5>
              <span className='text-secondary'>Modenza</span> <br />
              <div style={{ marginTop: "10px" }} className='d-flex  align-items-center gap-2'>
                <span className={Mode ? 'text' : 'Dtext'}>Color </span>
                <input style={{ width: "28px", padding: "0px", }} type="color" />
              </div>
            </div>
            <div>
              <span className={Mode ? 'text' : 'Dtext'}>
                Amount <br />
              </span>
              <select className={Mode ? ' select' : ' select'}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select > <br />
              <a href="#">remove</a>
            </div>
            <div>
              <h5 className={Mode ? 'text' : 'Dtext'}>$ 179.99</h5>
            </div>
            <div >
              <div className={Mode ? 'cD' : 'cDD'}>
                <div className='rl'>
                  <span className={Mode ? 'text' : 'Dtext'}>Subtotal</span>
                  <span className={Mode ? 'text' : 'Dtext'}> $179.99</span>
                </div>
                <hr />
                <div className='rl'>
                  <span className={Mode ? 'text' : 'Dtext'}>Shipping</span>
                  <span className={Mode ? 'text' : 'Dtext'}>$5.00</span>
                </div>
                <hr />
                <div className='rl'>
                  <span className={Mode ? 'text' : 'Dtext'}>Tax</span>
                  <span className={Mode ? 'text' : 'Dtext'}>$18.00</span>
                </div>
                <hr />
                <div className='rl'>
                  <p className={Mode ? 'text' : 'Dtext'}>Order Total</p>
                  <p className={Mode ? 'text' : 'Dtext'}>$202.99</p>
                </div>
              </div>
              <button className='btn btn-danger mt-3'><Link className='text-decoration-none text-white' to={"/login"}>PLEASE LOGIN</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart