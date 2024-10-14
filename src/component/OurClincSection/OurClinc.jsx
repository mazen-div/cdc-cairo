import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination,Navigation } from "swiper/modules";
// import required modules
import SliderPic from "../../assets/images/Pic.png";
import Group2 from "../../assets/images/Group2.png";
import Group1 from "../../assets/images/Group1.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import { useEffect, useState } from "react";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
import Arrows from "../../Icons/Arrows";
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


          <section id="home">
            <h2 style={{color:"black"}}>
            {
      text?.title
     } <span style={{ color: "#8F6F48" ,textTransform:"uppercase"}}> CDC</span>
            </h2>
            <div className="linerGrad"></div>
            <h3 style={{ color: "black"}}>
              <span style={{ color: "#8F6F48" }}>C</span>omputerized{" "}
              <span style={{ color: "#8F6F48" }}>D</span>ental{" "}
              <span style={{ color: "#8F6F48" }}>C</span>linic
            </h3>
            <p style={{color:"black"}}>
            Proin placerat posuere malesuada. Nulla ac condimentum diam, id
            pulvinar orci. Morbi eu sapien nibh.
              
            </p>
            </section>






         
           
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
            {/* <div className="ulClass">
              {
                text?.items?.map((item)=>(
                  <div className="UlItem">
                  <div></div>
              {item}
                </div>
                ))
              }
           
             
            </div> */}
          </section>
        </div>
        <div className="col-lg-6 HomeHeaderImagesContainer" style={{marginTop:"100px"}}>
          <div style={{position:'relative'}}>
            <Swiper
              effect={"cards"}
              pagination={true}
              grabCursor={true}
              navigation={{
                nextEl: ".NextArrowws",
                prevEl: ".PervArrowws",
              }}
              modules={[EffectCards, Pagination,Navigation]}
              className="mySwiper"
            >
              {
                images?.map((image)=>(
                  <SwiperSlide>
              <div>
              <img className="HomeHeaderImages" src={image} />
              </div>
                </SwiperSlide>))
              }
            
            </Swiper>
            <div className="ArrowContainer" style={{left:'50%',transform:'translateX(-50%)',bottom:'-70px'}} id="SAC">
                <div className="PervArrowws">
                  <Arrows />
                </div>
                <div className="NextArrowws" id="nextErr">
                  <Arrows />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClinc;
