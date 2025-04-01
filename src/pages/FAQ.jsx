/* eslint-disable react/prop-types */


const FAQ = ({t}) => {
  return (
    <div>
      <div className="whyus-table">
        <div className="container" id="faq">

          <div className="w-lg-50 mx-auto">
            
            <div className="accordion accordion-flush" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#coll1" aria-expanded="true" aria-controls="coll1">
                    <h5>
                      {t("faqtext1")}
                    </h5>
                  </button>
                </h2>
                <div id="coll1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                      {t("faqans1")}
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll2" aria-expanded="false" aria-controls="coll2">
                    <h5>
                      {t("faqtext2")}
                    </h5>
                  </button>
                </h2>
                <div id="coll2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  {t("faqans2")}
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll3" aria-expanded="false" aria-controls="coll3">
                    <h5>
                    {t("faqtext3")}
                    </h5>
                  </button>
                </h2>
                <div id="coll3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  {t("faqans3")}
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#coll4" aria-expanded="false" aria-controls="coll4">
                    <h5>
                    {t("faqtext4")}
                    </h5>
                  </button>
                </h2>
                <div id="coll4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  {t("faqans4")}
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
        </div>
    </div>
  )
}

export default FAQ
