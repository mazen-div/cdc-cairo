import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import { EffectCards, Pagination,Navigation } from "swiper/modules";

// import required modules

import Case from "../../assets/images/Case.png";
import Qoutes from "../../assets/images/Qoutes.png";
import star from "../../assets/images/Star.png";
import EmptyStar from "../../assets/images/EmptyStar.png";



import Case2 from "../../assets/images/Case2.png";
import Case3 from "../../assets/images/Case3.png";


import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
import { useState,useEffect } from "react";
import Arrows from "../../Icons/Arrows";

const Opionin = () => {
  const [activeBtn, setActiveBtn] = useState("All Cases");
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    try {
      const collectionRef = collection(db, "testimonials", "testimonials", "Cards");
      const snapshot = await getDocs(collectionRef);
      const cardsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCards(cardsData);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };
  useEffect(()=>{
    fetchCards()
  },[])

  return (
    <div className="" id="Testimonials">
 <div className="container">
 <div className="row">
        <div className="col-lg-12"><section  className="Testimonials" id="testimonials"   >
<center>
<h2 style={{color:"white"}}>
WHAT PEOPLE ARE SAYING ABOUT US
</h2>
<div className="linerGrad"></div>
</center>

</section></div>
        <div className="col-lg-12">
        <div style={{position:'relative'}}>
        <>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: ".NextArroww",
              prevEl: ".PervArroww",
            }}
             pagination={true}
              grabCursor={true}
              modules={[ Pagination,Navigation]}
              
              className="mySwiperrd"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {
                cards.map((card)=>{
                  const rateArray = Array.from({length: card?.Rate}, (_, i) => i);
                  const emptyStars = Array.from({length: 5-card?.Rate}, (_, i) => i);
                  return (
                    <SwiperSlide className="">
                    <div className="TestimonialsCard">
                     <div className="d-flex position-relative ">
       <div> <img src={"https://img.icons8.com/?size=100&id=38970&format=png&color=FFFFFF"} style={{width:'20px'}} /></div>
       <div className="d-flex gap-2 Stars" style={{minWidth:'130px'}}>
        {
         rateArray.map((item)=>{
          return (
            <img src={star} />
          )
         })
        }
        {
         emptyStars.map((item)=>{
          return (
            <img src={EmptyStar} />
          )
         })
        }
      
        
    
       
       </div>
                     </div>
                     <p className="mainText">
                   {
                    card?.Text
                   }
                     </p>
                     <div className="UlItem">
           <div></div>
         {card?.Name}
         </div>
                    </div>
                       
                     </SwiperSlide>
                  )
                })
              }
           
           
            </Swiper>
          </>
          <div className="ArrowContainer">
            
            <div className="PervArroww" id="PervErr">
              <Arrows />
            </div>
            <div className="NextArroww" id="nextErr">
              <Arrows />
            </div>
          </div>
        </div>
         
        </div>
      </div>
 </div>
    </div>
  );
};

export default Opionin;
