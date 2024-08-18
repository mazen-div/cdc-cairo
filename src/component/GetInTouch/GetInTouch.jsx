import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import { EffectCards, Pagination } from "swiper/modules";
// import required modules
import SliderPic from "../../assets/images/Pic.png";
import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import Email from "../../Icons/Email";
import Call from "../../Icons/Call";
import { useEffect, useState } from "react";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
const GetInTouch = () => {
  const [text, setText] = useState({});
  const [images, setImages] = useState([]);
  const fetchCards = async () => {
    try {
      const collectionRef = doc(db, "contact", "text");


      const snapshot = await getDoc(collectionRef);
  setText(snapshot.data())
 
    


    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };
  useEffect(()=>{
    fetchCards()
  },[])
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-lg-6"><section  className="OurClinc" id="contact"   >
<div className="d-flex flex-column align-items-center">
<h2>
GET IN touch
</h2>
<div className="linerGrad"></div>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean ut est cursus.</p>
</div>
<div className="d-flex gap-5 align-items-center flex-wrap HeaderBtns mt-3">
  
 <div className="contactCard">
  <Email />

<p>Email us
  </p>
  <span>{
    text?.email}
    </span> </div>
    <div className="contactCard">
  <Call />

<p>call us
  </p>
  <span>{
    text.number}
    </span> </div>

    
</div>
</section></div>
        <div className="col-lg-6 mt-3">
       <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8236545057666!2d31.376098700000004!3d30.099236399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581751b455051f%3A0xc60a1b2ee449af89!2z2YXYsdmD2LIg2LPZiSDYr9mJINiz2Ykg2YPZhdio2YrZiNiq2LHYp9mK2LLYryDZhNi32Kgg2KfZhNin2LPZhtin2YYgLSBDREMgQ29tcHV0ZXJpemVkIERlbnRhbCBDZW50ZXI!5e0!3m2!1sen!2seg!4v1722258634870!5m2!1sen!2seg"
          width="100%" height="300" 
           allowfullscreen=""
           style={{borderRadius: "10px"}}
           loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
