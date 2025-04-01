/* eslint-disable react/prop-types */

import Marquee from "react-fast-marquee"
import { topik } from "../data"

const Results = ({t}) => {
  return (
    <div className="results">
        <div className="results-cont"  id="results">
            <div className="results-text">
                <h2>
                    {t("results-text")}
                </h2>
            </div>
            <Marquee pauseOnClick={true} style={{marginTop:"50px"}}>
                <img src={topik} alt="" className="marque-img" />
                <img src={topik} alt="" className="marque-img" />
                <img src={topik} alt="" className="marque-img" />
                <img src={topik} alt="" className="marque-img" />
            </Marquee>
            <Marquee direction="right" pauseOnClick={true} style={{marginTop:"50px"}}>
                <img src={topik} alt="" className="marque-img" />
                <img src={topik} alt="" className="marque-img" />
                <img src={topik} alt="" className="marque-img" />
                <img src={topik} alt="" className="marque-img" />
            </Marquee>
            <button className="resultsBtn">
                ARIZA QOLDIRISH
            </button>
        </div>
    </div>
  )
}

export default Results
