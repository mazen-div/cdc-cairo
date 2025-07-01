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
import { Row, Col } from 'react-bootstrap';

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
            <h2 style={{color:"black",fontSize:"25px"}}>
            {
      text?.title
     } <span style={{ color: "#8F6F48" ,textTransform:"uppercase"}}> CDC</span>
            </h2>
            <div className="linerGrad"></div>
         
           
            </section>






         
           
            <div className="HeaderBtns OurClincBtns">
              <div className="align-items-center flex-wrap">
  <Row  >
    <Col xs="auto" className="d-flex gap-2 align-items-center">
    <svg fill="#ffffff"  width="60px" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-68.91 -68.91 597.20 597.20" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-68.91" y="-68.91" width="597.20" height="597.20" rx="298.6" fill="#8F6F48" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="13.78152"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M117.31,178.834l105.938,69.969c8.365,5.525,19.437,4.672,26.859-2.121c3.935-1.236-1.911,2.226,84.107-54.543 l90.077,13.361c11.269,1.672,21.772-6.112,23.445-17.388c1.673-11.275-6.112-21.772-17.388-23.445l-97.885-14.519 c-5.029-0.747-10.154,0.39-14.397,3.19l-42.884,28.302l-17.292-13.48c-9.782,10.236-7.344,7.684-17.528,18.34 c-6.994,7.318-17.698,8.984-26.384,4.909l-62.156-29.269c70.819,12.611,66.147,11.895,68.314,11.895 c4.652,0,9.16-1.891,12.434-5.317l47.478-49.679c6.563-6.868,6.316-17.755-0.551-24.318c-6.869-6.563-17.757-6.316-24.319,0.551 l-41.106,43.012l-56.219-10.011l43.922-3.86l-27.733-21.62c-11.17-8.708-27.285-6.712-35.993,4.458l-26.83,34.416 C102.032,153.45,104.83,170.591,117.31,178.834z"></path> <circle cx="78.871" cy="90.141" r="37.963"></circle> <path d="M435.425,275.642c9.276,3.358,19.526-1.439,22.887-10.72c3.36-9.28-1.44-19.527-10.72-22.887l-91.068-32.972 c-5.222-1.891-11.027-1.246-15.708,1.745l-103.222,65.969L27.693,138.727c-8.246-5.422-19.328-3.135-24.751,5.112 c-5.423,8.246-3.136,19.328,5.111,24.751l219.583,144.417c2.978,1.959,6.398,2.94,9.82,2.94c3.343,0,6.689-0.937,9.623-2.813 l10.533-6.732l30.756,65.062h-51.031c-9.87,0-17.871,8.001-17.871,17.871s8.001,17.871,17.871,17.871H438.66 c9.87,0,17.871-8.001,17.871-17.871s-8.001-17.871-17.871-17.871h-54.717l-49.685-114.047l18.382-11.748L435.425,275.642z"></path> </g> </g> </g> </g></svg>  
    </Col>
    <Col className="mauto">
    {text?.firstFeatue}
    </Col>
    </Row>
    <Row>
    <Col xs="auto" className="d-flex gap-2 align-items-center">
    <svg viewBox="-5.28 -5.28 34.56 34.56" width="60px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-5.28" y="-5.28" width="34.56" height="34.56" rx="17.28" fill="#8F6F48" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M11.9976 12.7119C11.2978 11.9328 10.1309 11.7232 9.25414 12.4367C8.37738 13.1501 8.25394 14.343 8.94247 15.1868C9.33119 15.6632 10.2548 16.4983 10.9854 17.1353C11.3319 17.4374 11.5051 17.5885 11.7147 17.6503C11.8934 17.703 12.1018 17.703 12.2805 17.6503C12.4901 17.5885 12.6633 17.4374 13.0098 17.1353C13.7404 16.4983 14.664 15.6632 15.0527 15.1868C15.7413 14.343 15.6329 13.1426 14.7411 12.4367C13.8492 11.7307 12.6974 11.9328 11.9976 12.7119ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Col>
    <Col className="mauto">
    {text?.secondFeatue}
    </Col>
  </Row >
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
            <div className="ArrowContainer" style={{left:'50%',transform:'translateX(-50%)'}} id="SACC">
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
