import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination, Navigation } from "swiper/modules";

// import required modules

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

const OurExperince = ({state}) => {
  const [activeBtn, setActiveBtn] = useState("All Cases");
  return (
  <>
    <div className="" id="OurExperince">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section className="Testimonials">
              <h2>work experience</h2>
              <div className="linerGrad"></div>
              <p>
            {state?.work}</p>
          <div className="d-flex flex-wrap">

          <div className="ulClass">
             {
              state?.feat1?.map(item=>(
                <div className="UlItem">
                <div></div>
            { item}
              </div>
              ))
             }
            
            </div>
            <div className="ulClass">
            {
              state?.feat2?.map(item=>(
                <div className="UlItem">
                <div></div>
           {  item}
              </div>
              ))
             }
            
            </div>
          </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div className="" id="OurExperince">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <section className="Testimonials">
              <h2>Certificates </h2>
              <div className="linerGrad"></div>
         
     <div className="row">
     {
      state?.additionalImages?.map((img)=>(  <div className="col-lg-3 mt-4 col-md-6 col-12">
        <img src={img} style={{width:"100%",height:'100%'}} /> </div>))
     }
      
      
     </div>
            </section>
          </div>
        </div>
      </div>
    </div></>
  );
};  

export default OurExperince;
