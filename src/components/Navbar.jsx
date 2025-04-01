/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import logo from '../../public/logo1.svg'

const Navbar = ({handleChange,t,i18n}) => {
    const [shadow, setShadow] = useState(false);
    const language = localStorage.getItem("i18nextLng")

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const handleNavItemClick = () => {
    const navbarToggler = document.getElementById('navbarToggler');
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={shadow ? "navbar navbar-expand-lg bg-white fixed-top shadow-sm" : "navbar navbar-expand-lg bg-white fixed-top"} style={{maxWidth:"1920px",margin:"-8px auto",fontFamily:"$font-family-sans-serif", padding:"0"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="logo" />
          </a>
            <div className="logo-extra">
            <p>
                {t("extra")}
            </p>
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-3" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 fs-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home" onClick={handleNavItemClick}>
                  {t("negabiz")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#results" onClick={handleNavItemClick}>
                  {t("natijalar")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#courses" onClick={handleNavItemClick}>
                  {t("kurslar")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#faq" onClick={handleNavItemClick}>
                  {t("savollar")}
                </a>
              </li>
            </ul>
            <select onChange={handleChange} value={language} className="lang">
              <option value="uz">
                Uz
              </option>
              <option value="ru">
                Ru
              </option>
            </select>
            <div className="calling">
              <a href="tel:+998990972472" className="calling-items">
              +998 (33) 306 0098
              </a>
              <a href="tel:+998990972472" className="calling-items">
                {t("bog'laning")}
              </a>
            </div>
            
          </div>
        </div>
      </nav>
      
      </>
    )
}

export default Navbar
