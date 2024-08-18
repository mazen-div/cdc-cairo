import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";
// import required modules
import SliderPic from "../../assets/images/Pic.png";
import Group2 from "../../assets/images/Group2.png";
import Group1 from "../../assets/images/Group1.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import { useEffect, useState } from "react";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
const OurClinc = () => {
  const [text, setText] = useState({});
  const [images, setImages] = useState([]);
  const fetchCards = async () => {
    try {
      const collectionRef = doc(db, "OurClinc", "text");
      const images = doc(db, "OurClinc", "images");

      const snapshot = await getDoc(collectionRef);
  setText(snapshot.data())
      const imagesData = await getDoc(images);
    
      setImages(imagesData.data().urls);

    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };
  useEffect(()=>{
    fetchCards()
  },[])
  return (
    <div className="container" >
      <div className="row">
        <div className="col-lg-6">
          <section className="OurClinc"  id="about">
            <h2 style={{textTransform:"uppercase",fontWeight:"600"}}>
     {
      text?.title
     }
            </h2>
            <div className="linerGrad"></div>
           
            <p>
              {
                  text?.subTitle
              }
         
            </p>
            <div className="d-flex gap-5 align-items-center flex-wrap HeaderBtns OurClincBtns">
              <div className="d-flex gap-2 align-items-center">
                <img src={Group1} id="Cliniciconid" />
           {
            text?.firstFeatue
           }
              </div>
              <div className="d-flex gap-2 align-items-center">
                <img src={Group2} id="Cliniciconid"  />
               {
                text?.secondFeatue
               }
              </div>
            </div>
            <div className="ulClass">
              {
                text?.items?.map((item)=>(
                  <div className="UlItem">
                  <div></div>
              {item}
                </div>
                ))
              }
           
             
            </div>
          </section>
        </div>
        <div className="col-lg-6" style={{marginTop:"100px"}}>
          <>
            <Swiper
              effect={"cards"}
              pagination={true}
              grabCursor={true}
              modules={[EffectCards, Pagination]}
              className="mySwiper"
            >
              {
                images?.map((image)=>(
                  <SwiperSlide>
              <div>
              <img style={{width:"450px",height:"450px",borderRadius:"25px"}} src={image} />
              </div>
                </SwiperSlide>))
              }
            
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default OurClinc;
