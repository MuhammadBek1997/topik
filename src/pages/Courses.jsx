/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Courses = ({t}) => {
  return (
    <div className="courses" id="courses">
        <div className="courses-cont">
            <div className="course-text">
                <h2>
                    {t("coursetext")}
                </h2>
            </div>
            <div className="course-list">
                <div className="course-list-item">
                    <div className="list-item-cont">
                        <img src={"/img.png"} alt="" className="course1img" />
                        <div className="course-name">
                            <h3>
                                {t("course1")}
                            </h3>
                            <div className="course-length">
                                {t("davomiyligi")}
                            </div>
                        </div>
                        <p>
                            <span className="coursetext-colored">{t("course1span")}</span>{t("course1text")}
                        </p>
                        <div className="course-reg">
                            <button className="regbtn">
                                {t("royhatdanotish")}
                            </button>
                            <h3>
                                {t("course1price")}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="course-list-item">
                    <div className="list-item-cont">
                        <img src={"/course2.png"} alt="" className="course2img" />
                        <div className="course-name">
                            <h3>
                                {t("course2")}
                            </h3>
                            <div className="course-length">
                                {t("davomiyligi")}
                            </div>
                        </div>
                        <p>
                            {t("course2text")}
                        </p>
                        <div className="course-reg">
                            <button className="regbtn">
                                {t("royhatdanotish")}
                            </button>
                            <h3>
                                {t("course2price")}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="course-list-item">
                    <div className="list-item-cont">
                        <img src={"/course3.png"} alt="" className="course3img" />
                        <div className="course-name">
                            <h3>
                                {t("course3")}
                            </h3>
                            <div className="course-length">
                                {t("davomiyligi")}
                            </div>
                        </div>
                        <p>
                            {t("course3text1")} <span className="coursetext-colored">{t("course3span")}</span>{t("course3text2")}
                        </p>
                        <div className="course-reg">
                            <button className="regbtn">
                                {t("royhatdanotish")}
                            </button>
                            <h3>
                                {t("course3price")}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses
