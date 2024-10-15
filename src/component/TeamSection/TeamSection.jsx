import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination,Navigation } from "swiper/modules";
// import required modules

import Case from "../../assets/images/Case.png";
import Case2 from "../../assets/images/Case2.png";
import Case3 from "../../assets/images/Case3.png";
import Doc from "../../assets/images/Doc.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";

import Facebook from "../../Icons/Facebook";
import Twitter from "../../Icons/Twitter";
import Linkedin from "../../Icons/Linkedin";
import { useNavigate, useNavigation } from "react-router-dom";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
import { useState,useEffect } from "react";
import Arrows from "../../Icons/Arrows";
import { db } from "../../firebase";
const TeamSection = () => {
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    try {
      const collectionRef = collection(db, "OurDoctors", "Doctors", "Cards");
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
  const navigate=useNavigate();
  const handleNavigate=(state)=>{
    navigate("/OurTeam",{state})
  }
  return (
    <div className="container" id="team">
      <div className="row">
        <div className="col-lg-12">
          <section className="OurClinc" id="team">
            <h2>meet our specialist</h2>
            <div className="linerGrad"></div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              est cursus, imperdiet sem ut, molestie nibh.
            </p>
          </section>
        </div>
        <div className="col-lg-12 " style={{marginTop:"80px"}}>
          <div className="">
          {
            cards && (
              <div class="row Servcis-Cards">
            <div style={{ position: "relative" }}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={{
                  nextEl: ".NextArrow",
                  prevEl: ".PervArrow",
                }}
                pagination={true}
                grabCursor={true}
                modules={[Pagination, Navigation]}
                className="mySwiperr"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {cards.map((card) => {
                  return (
                    <SwiperSlide >
                   <div className="" onClick={()=>handleNavigate(card)}>
             <div className="teamCard">
             <div class="containerr">
                <img src={card?.firstImageUrl} alt="Doctor" />
              </div>
              <div class="text-container">
                <p class="name">{card?.Name}</p>
                <p class="title">{card?.Title}</p>
             
              </div>
              
             </div>
            </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="ArrowContainer" id="TAC">
                <div className="PervArrow">
                  <Arrows />
                </div>
                <div className="NextArrow" id="nextErr">
                  <Arrows />
                </div>
              </div>
            </div>
          </div>
            )
          }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
