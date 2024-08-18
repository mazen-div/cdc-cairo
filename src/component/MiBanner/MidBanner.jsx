import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import { EffectCards, Pagination } from "swiper/modules";
// import required modules
import SliderPic from "../../assets/images/Pic.png";
import Doctor from "../../assets/images/Doctor.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import CheckIcon from "../../Icons/CheckIcon";

const MidBanner = () => {
  return (
    <div className=" MidBanner" >
      <div className="row align-items-center">
        <div className="col-lg-8"><section  className="OurClinc" id=""   >
<h2>
we understand you
</h2>
<div className="linerGrad"></div>

<p>
Vestibulum venenatis, libero nec malesuada maximus, leo quam ultricies
enim, eu rhoncus tortor dui at lorem. Nunc interdum, leo ac consequat
pellentesque.</p>
<div className="d-flex gap-5 align-items-center flex-wrap HeaderBtns">
  
    <div className="d-flex gap-2 align-items-center" >
        <CheckIcon />
        Arabic
    </div>
    <div className="d-flex gap-2 align-items-center" >
        <CheckIcon />
        English
    </div>
    <div className="d-flex gap-2 align-items-center" >
        <CheckIcon />
        French
    </div>
</div>
</section></div>
        <div className="col-lg-4 d-flex justify-content-center">
       <img src={Doctor} />
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
