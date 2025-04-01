/* eslint-disable react/prop-types */

const Footer = ({t}) => {
  return (
    <div className="footer">
        <div className="footer-map">
        <img src={"/map.png"} alt="" className="map" />
        </div>
        <div className="footer-cont">
            <div className="footer-logo">
                <a href="#home">
                <img src={"/logo1.svg"} alt="" />
                </a>
            </div>
            <div className="footer-list">
                <li className="f-list-item">
                    <a href="#home">
                        {t("negabiz")}
                    </a>
                </li>
                <li className="f-list-item">
                    <a href="#results">
                        {t("natijalar")}
                    </a>
                </li>
                <li className="f-list-item">
                    <a href="#courses">
                        {t("kurslar")}
                    </a>
                </li>
                <li className="f-list-item">
                    <a href="#faq">
                        {t("savollar")}
                    </a>
                </li>
            </div>
            <div className="footer-social">
                <div className="social-list">
                    <a href="">
                        <img src={"/Group 72.png"} alt="" />
                        <img src={"/tg.svg"} alt="" />
                        <img src={"/insta.svg"} alt="" />
                        <img src={"/youtube.svg"} alt="" />
                    </a>
                </div>
                <a href="">
                    {t("maxfiy")}
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
