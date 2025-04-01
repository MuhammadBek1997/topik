/* eslint-disable react/prop-types */

import { gks, video } from "../data"

const Grants = ({t}) => {
  return (
    <div className="grants">
        <div className="grants-cont">
            <div className="grants-text">
              <h2>
                {t("grants-text")}
              </h2>
            </div>
            <div className="gks-cont">
              <div className="gks-img">
                <img src={gks} alt="" />
              </div>
              <div className="gks-info">
                <h4>
                  {t("grants-info-1-1")}<span>{t("grants-span-1")}</span>{t("grants-info-1-2")}
                </h4>
                <p>
                  {t("grants-info-1-3")}<span>{t("grants-span-2")}</span>{t("grants-info-1-4")}<span>{t("grants-span-3")}</span>{t("grants-info-1-5")}<span>{t("grants-span-4")}</span>{t("grants-info-1-6")}
                </p>
                <h4>
                  {t("grants-info-2-1")}
                </h4>
                <li>
                    {t("grants-info-2-2")}
                </li>
                <li>
                  {t("grants-info-2-3")}
                </li>
                <li>
                  {t("grants-info-2-4")}
                </li>
              </div>
            </div>
            <div className="video-cont">
              <iframe src=""></iframe>
              
              <img src={video} alt="" className="video"/>
            </div>
        </div>
    </div>
  )
}

export default Grants
