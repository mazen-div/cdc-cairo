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
import { doc, getDoc, collection, addDoc, updateDoc, arrayRemove, getDocs } from "firebase/firestore";
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
  useEffect(() => {
    fetchCards()
  }, [])
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-lg-4"><section className="OurClinc" id="contact"   >
          <div className="d-flex flex-column align-items-center">
            <h2 className="uniqfont">
              GET IN touch
            </h2>
            <div className="linerGrad"></div>

          </div>
          <div className="d-flex flex-column gap-3 align-items-center HeaderBtns mt-3">

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
        <div className="col-lg-4 mt-3">
          <h5 className="text-center text-secondary fw-semibold" style={{ marginBottom: "20px" }}>CDC-Sheraton</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8236545057666!2d31.376098700000004!3d30.099236399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581751b455051f%3A0xc60a1b2ee449af89!2z2YXYsdmD2LIg2LPZiSDYr9mJINiz2Ykg2YPZhdio2YrZiNiq2LHYp9mK2LLYryDZhNi32Kgg2KfZhNin2LPZhtin2YYgLSBDREMgQ29tcHV0ZXJpemVkIERlbnRhbCBDZW50ZXI!5e0!3m2!1sen!2seg!4v1722258634870!5m2!1sen!2seg"
            width="100%"
            height="300"
            allowFullScreen=""
            style={{ borderRadius: "10px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-lg-4 mt-3">
          <h5 className="text-center text-secondary fw-semibold" style={{ marginBottom: "20px" }}>CDC- Newgiza </h5>
          <iframe
            src="https://www.google.com/maps?q=X3Q8%2BV9%20CDC%20Newgiza%20(%20Computerized%20dental%20clinic%20)%2C%20First%206th%20of%20October%2C%20Giza%20Governorate%203294501&ftid=0x145851003ecc6c9f:0x2255090a165b47b5&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default GetInTouch;
