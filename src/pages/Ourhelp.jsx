/* eslint-disable react/prop-types */

import Marquee from "react-fast-marquee"
import { ellips, topik } from "../data"

const Ourhelp = ({t}) => {
  return (
    <div className="ourhelp">
        <div className="ourhelp-cont">
            <div className="ourhelp-text">
            <h2 className="students-text">
                {t("students-text")}
            </h2>
            </div>
            <div className="students-marque-cont">
            <div className="m-cont-left">
                <p className="help-visa">
                    <span className="help-visa-colored">{t("help-visa-span")}</span>{t("help-visa")}
                </p>
                <p className="help-extra">
                    {t("students-extra")}
                </p>
                <button className="studentsbtn">
                    {t("arizaqoldirish")}
                </button>
                <img src={ellips} alt="" className="ellips" />
            </div>
            <div className="m-cont-right">
                <Marquee className="students-marque">
                  <img src={topik} alt="" />
                  <img src={topik} alt="" />
                  <img src={topik} alt="" />
                  <img src={topik} alt="" />
                </Marquee>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Ourhelp
