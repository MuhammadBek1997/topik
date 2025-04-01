/* eslint-disable react/prop-types */


const WhyUs = ({t}) => {
  return (
    <div className="whyus">
      <div className="whyus-cont">
        <div className="whyus-text">
            <h2>
                {t("whyustext")}
            </h2>
        </div>
        <div className="whyus-list">
            <div className="why-list-item">
                <div className="w-list-item-cont">
                    <div className="numberofitem">
                        01
                    </div>
                    <h2>
                        {t("whyitem1")}
                    </h2>
                    <p>
                        {t("whyitemtext1")}
                    </p>
                </div>
            </div>
            <div className="why-list-item">
                <div className="w-list-item-cont">
                    <div className="numberofitem">
                        02
                    </div>
                    <h2>
                        {t("whyitem2")}
                    </h2>
                    <p>
                        {t("whyitemtext2")}
                    </p>
                </div>
            </div>
            <div className="why-list-item">
                <div className="w-list-item-cont">
                    <div className="numberofitem">
                        03
                    </div>
                    <h2>
                        {t("whyitem3")}
                    </h2>
                    <p>
                        {t("whyitemtext3")}
                    </p>
                </div>
            </div>
            <div className="why-list-item">
                <div className="w-list-item-cont">
                    <div className="numberofitem">
                        04
                    </div>
                    <h2>
                        {t("whyitem4")}
                    </h2>
                    <p>
                        {t("whyitemtext4")}
                    </p>
                </div>
            </div>
            <div className="why-list-item">
                <div className="w-list-item-cont">
                    <div className="numberofitem">
                        05
                    </div>
                    <h2>
                        {t("whyitem5")}
                    </h2>
                    <p>
                        {t("whyitemtext5")}
                    </p>
                </div>
            </div>
            <div className="why-list-item">
                <div className="w-list-item-cont">
                    <div className="numberofitem">
                        06
                    </div>
                    <h2>
                        {t("whyitem6")}
                    </h2>
                    <p>
                        {t("whyitemtext6")}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
