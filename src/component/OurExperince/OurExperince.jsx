import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination, Navigation } from "swiper/modules";

// Import required modules
import Case from "../../assets/images/Case.png";
import Qoutes from "../../assets/images/Qoutes.png";
import star from "../../assets/images/Star.png";
import EmptyStar from "../../assets/images/EmptyStar.png";

import img from "../../assets/images/img.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";

import img3 from "../../assets/images/img3.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import { useState } from "react";
import Arrows from "../../Icons/Arrows";

const OurExperience = ({ state }) => {
  const [activeBtn, setActiveBtn] = useState("All Cases");

  // Check if any section has values
  const hasWorkExperience = state?.work || (state?.feat1?.length > 0 || state?.feat2?.length > 0);
  const hasCertificates = state?.additionalImages?.length > 0;

  // If no sections have values, render nothing
  if (!hasWorkExperience && !hasCertificates) {
    return null;
  }

  return (
    <>
      {hasWorkExperience && (
    <div className="" id="OurExperince">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <section className="Testimonials">
            <h2>Work Experience</h2>
            <div className="linerGrad"></div>
                  {state?.work && <p>{state.work}</p>}
                  <div className="d-flex flex-wrap">
                    {state?.feat1?.length > 0 && (
                      <div className="ulClass">
                        {state.feat1.map((item, index) => (
                          <div className="UlItem" key={index}>
                            <div></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    {state?.feat2?.length > 0 && (
                      <div className="ulClass">
                        {state.feat2.map((item, index) => (
                          <div className="UlItem" key={index}>
                            <div></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
      {hasCertificates && (
         <div className="" id="OurExperince">
         <div className="container">
           <div className="row">
             <div className="col-lg-12">
               <section className="Testimonials">
                 <h2>Certificates </h2>
                 <div className="linerGrad"></div>
                  <div className="row">
                    {state.additionalImages.map((img, index) => (
                      <div className="col-lg-3 mt-4 col-md-6 col-12" key={index}>
                        <img
                          src={img}
                          style={{ width: "100%", height: "100%" }}
                          alt={`Certificate ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurExperience;
