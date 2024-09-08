import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination,Navigation } from "swiper/modules";
// import required modules

import SliderPic from "../../assets/images/Pic.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import Arrows from "../../Icons/Arrows";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import { useNavigate } from "react-router-dom";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
import { useState,useEffect } from "react";
const OurServices = () => {
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    try {
      const collectionRef = collection(db, "OurService", "services", "Cards");
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

  const navigate = useNavigate();
  const handleNavigate = (state) => {
    navigate("/SevicePage",{state});
  };
  return (
    <section class="" id="services">
      <div class="container ">
        <div class="row services-section">
          <h2>OUR SERVICES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
            est cursus, imperdiet sem ut, molestie nibh.
          </p>
        </div>
        <div className="px-4">
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
                      <div class="service-card p-3"  onClick={() => handleNavigate(card)}>
                        <div className="HoverDiv">
                          <div className="ulClass" >
                            {
                              card?.homeFeat?.map((item)=>(
                                <div className="UlItem">
                                <div></div>
                              {item}
                              </div>
                              ))
                            }
                           
                           
                          </div>
                          <div
                            className="findOutMore"
                            onClick={() => handleNavigate(card)}
                          >
                            find out more <ArrowIcon />
                          </div>
                        </div>
                        <div class="service-icon mb-2">
                          <img src={card?.iconUrl} alt="Teeth Root Canals" />
                        </div>
                        <h5>{card?.title}  </h5>
                        <p>
                         {card?.homeTxt}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="ArrowContainer" id="SAC">
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
      <div className="backgroundColros"></div>
    </section>
  );
};

export default OurServices;
