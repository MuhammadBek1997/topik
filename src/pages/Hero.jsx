/* eslint-disable react/prop-types */

import { heroline, leaves } from "../data"


const Hero = ({t}) => {
  return (
    <div className="hero">
      <div className="about-course">
        <img src={heroline} alt="line" className="hero-line" />
        <p className="hero-extra-text">
            {t("heroextra")}
        </p>
      </div>
      <div className="hero-text">
        <h1 className="hero-main-text">
            {t("heromain")}
        </h1>
      </div>
      <div className="hero-list">
        <li className="hero-list-item">
            <img src={leaves} alt="" className="leaf"  />
            <p className="hero-list-text">
            {t("beshoy")}
            </p>
        </li>
        <li className="hero-list-item2">
            <img src={leaves} alt="" className="leaf" />
            <p className="hero-list-text">
            {t("darajani")}
            </p>
        </li>
      </div>
      <button className="herobtn">
        {t("yozilish")}
      </button>
      <p className="hero-underbtn-text">
        {t("underbutton")}
      </p>
    </div>
  )
}

export default Hero
