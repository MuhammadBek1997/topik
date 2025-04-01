/* eslint-disable react/prop-types */

import { catimg1, catimg2, catimg3, catimg4, catimg5, catimg6 } from "../data"

const Categoriesfor = ({t}) => {
  return (
    <div className="categories">
        <div className="cat-top-text">
          <h2>
            {t("cat-top-text")}
          </h2>
        </div>
        <div className="cat-list">
          <div className="cat-list-item">
            <img src={catimg1} alt="" className="cat-img" />
            <p className="cat-item-text">
              <span className="colored">{t("span1")}</span>{t("item-text-1")}
            </p>
          </div>

          <div className="cat-list-item">
            <img src={catimg2} alt="" className="cat-img" />
            <p className="cat-item-text">
              {t("item-text-2-1")}<span className="colored">{t("span2")}</span>{t("item-text-2-2")}
            </p>
          </div>

          <div className="cat-list-item">
            <img src={catimg3} alt="" className="cat-img" />
            <p className="cat-item-text">
              {t("item-text-3-1")}<span className="colored">{t("span3")}</span>{t("item-text-3-2")}
            </p>
          </div>

          <div className="cat-list-item">
            <img src={catimg4} alt="" className="cat-img" />
            <p className="cat-item-text">
              {t("item-text-4-1")}<span className="colored">{t("span4-1")}</span>{t("item-text-4-2")}<span className="colored">{t("span4-2")}</span>{t("item-text-4-3")}
            </p>
          </div>

          <div className="cat-list-item">
            <img src={catimg5} alt="" className="cat-img" />
            <p className="cat-item-text">
              {t("item-text-5")}<span className="colored">{t("span5")}</span>
            </p>
          </div>

          <div className="cat-list-item">
            <img src={catimg6} alt="" className="cat-img" />
            <p className="cat-item-text">
              {t("item-text-6-1")}<span className="colored">{t("span6")}</span>{t("item-text-6-2")}
            </p>
          </div>

        </div>
        <button className="catbtn">
          HA, BU MEN
        </button>
    </div>
  )
}

export default Categoriesfor
