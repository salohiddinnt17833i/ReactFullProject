import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Protected from './Services/Protected';
import About from './Pages/About';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import { IoMoonSharp } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState, } from 'react';
import { useTranslation } from "react-i18next";
import Topnav from './Components/Topnav';
import style from '../src/all.module.css';
import { FaBarsStaggered } from 'react-icons/fa6';

import './all.css'
import ProductDetailes from './Pages/ProductDetailes';

function App() {
  const [Mode, setMode] = useState(true);
  localStorage.setItem("darkMode", JSON.stringify(Mode));
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('uz');
  const [bar, setBar] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
      .then(response => response.json())
      .then(data => setInfo(data.data));
  }, []);

  function handleMode(e) {
    e.preventDefault();
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (darkMode) {
      darkMode = false;
    } else {
      darkMode = true;
    }
    setMode(darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }

  function handleChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
    return e.target.value;
  }

  function handlebar(e) {
    e.preventDefault();
    setBar(prevBar => !prevBar);
  }
  const isRegistrationOrLoginPage = window.location.pathname === '/register' || window.location.pathname === '/login';

  return (
    <>
      {!isRegistrationOrLoginPage && (
        <div id='None'>
          <div className={Mode ? style.topnav : style.Dtopnav}>
            <div className={style.container}>
              <Topnav></Topnav>
            </div>
          </div>
          <div className={Mode ? style.Navbar : style.Dnavbar}>
            <div className={style.container}>
              <div className='d-flex align-items-center justify-content-between'>
                <button className={style.Logobtn} type='button'>C</button>
                <FaBarsStaggered style={{ color: Mode ? '' : 'white' }} onClick={handlebar} className={style.bar} />
                <div className={style.navbarr}>
                  <div className={style.linkHover}> <NavLink className={Mode ? style.link : style.Dlink} to={"/"}>{t('Home')}</NavLink></div>
                  <div className={style.linkHover}> <NavLink className={Mode ? style.link : style.Dlink} to={"/about"}>{t('About')}</NavLink></div>
                  <div className={style.linkHover}><NavLink className={Mode ? style.link : style.Dlink} to={"/products"}>{t('Products')}</NavLink></div>
                  <div className={style.linkHover}> <NavLink className={Mode ? style.link : style.Dlink} to={"/cart"}>{t('Cart')}</NavLink></div>
                </div>
                <div style={{ backgroundColor: Mode ? '' : 'black' }} className={bar ? 'nav-bar' : 'nav-barr'}>
                  <div className={style.linkHover}> <NavLink className={Mode ? style.link : style.Dlink} to={"/"}>{t('Home')}</NavLink></div>
                  <div className={style.linkHover}> <NavLink className={Mode ? style.link : style.Dlink} to={"/about"}>{t('About')}</NavLink></div>
                  <div className={style.linkHover}><NavLink className={Mode ? style.link : style.Dlink} to={"/products"}>{t('Products')}</NavLink></div>
                  <div className={style.linkHover}> <NavLink className={Mode ? style.link : style.Dlink} to={"/cart"}>{t('Cart')}</NavLink></div>
                </div>
                <div>
                  <div className='d-flex gap-2 align-items-center'>
                    <div onClick={handleMode}>
                      {
                        Mode ? <IoMoonSharp className={Mode ? style.icon : style.Dicon} style={{ cursor: "pointer" }} /> : <CiSun className={Mode ? style.icon : style.Dicon} style={{ cursor: "pointer" }} />
                      }
                    </div>
                    <SlBasket className={Mode ? style.icon : style.Dicon} style={{ cursor: "pointer" }} />

                    <select style={{ backgroundColor: Mode ? '' : 'black', border: "none", outline: "none" }} onChange={handleChange} value={lang} className="lang">
                      <option value="uz">Uzbek</option>
                      <option value="eng">English</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/' element={<Protected></Protected>}>
          <Route path='/' element={<Home data={info}></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/products/:id' element={<ProductDetailes></ProductDetailes>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
