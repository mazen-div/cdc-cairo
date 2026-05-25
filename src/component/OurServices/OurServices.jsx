import { Swiper, SwiperSlide } from "swiper/react";
import { query, orderBy } from "firebase/firestore"; // Import necessary methods

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
      const collectionRef = collection(doc(db, "OurService", "services"), "Cards");
      const snapshot = await getDocs(collectionRef);
  
      // Extract and sort cards
      const cardsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      // Sort: Place items with missing createDate at the end
      cardsData.sort((a, b) => {
        const dateA = a.createDate ? new Date(a.createDate) : new Date(0); // Default to epoch for missing dates
        const dateB = b.createDate ? new Date(b.createDate) : new Date(0);
        return dateB - dateA; // Descending order
      });
  
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
    <section className="KKS" id="services">
      <div class="container kl">
      <section className="OurClinc" >
            <h2>OUR SERVICES</h2>
            <div className="linerGrad"></div>

         
          </section>
        <div class="row services-section">
        
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
                  nextEl: ".NArrow",
                  prevEl: ".PArrow",
                }}
                pagination={true}
                grabCursor={true}
                modules={[Pagination, Navigation]}
                className="mySwiperrr"
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
                        <div className="HoverDiv"      onClick={() => handleNavigate(card)}>
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
                        <center>
                        <h5>{card?.title}  </h5>
                        </center>
                        {/* <p>
                         {card?.homeTxt}
                        </p> */}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="ArrowContainer" id="SAC">
                <div className="PArrow">
                  <Arrows />
                </div>
                <div className="NArrow" id="nextErr">
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
