import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import { useState, useEffect } from "react";
import Arrows from "../../Icons/Arrows";
import { useNavigate } from "react-router-dom";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc, arrayRemove, getDocs } from "firebase/firestore";

const Cases = ({ casePage }) => {
  const [activeBtn, setActiveBtn] = useState("All Cases");
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const fetchCards = async () => {
    try {
      const collectionRef = collection(db, "Cases", "Cases", "Cards");
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

  useEffect(() => {
    fetchCards();
  }, []);

  const handleNavigate = (state) => {
    navigate("/CasePage", { state });
  };

  // Filter cards based on activeBtn
  const filteredCards = activeBtn === "All Cases" ? cards : cards.filter(card => card.Specialty === activeBtn);

  return (
    <div className="container" id="cases">
      <div className="row">
        <div className="col-lg-12">
          <section
            className="OurClinc"
            id="cases"
            style={{
              display: casePage ? "block" : "flex",
            }}
          >
            <h2>{!casePage ? "Cases" : "Similar Cases"}</h2>
            <div className="linerGrad"></div>
            {/* {!casePage && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ut est cursus, imperdiet sem ut, molestie nibh.
              </p>
            )} */}
          </section>
        </div>
        <div className="col-lg-12">
          <div className="overFlowDiv">
            {!casePage && (
              <div className="TabsBtn">
                <div
                  className={activeBtn === "All Cases" ? "active Btnn" : "Btnn"}
                  onClick={() => setActiveBtn("All Cases")}
                >
                  All Cases
                </div>
                <div
                  className={activeBtn === "Orthodontist" ? "active Btnn" : "Btnn"}
                  onClick={() => setActiveBtn("Orthodontist")}
                >
                  Orthodontist
                </div>
                <div
                  className={activeBtn === "Oral Surgeon" ? "active Btnn" : "Btnn"}
                  onClick={() => setActiveBtn("Oral Surgeon")}
                >
                  Oral Surgeon
                </div>
                <div
                  className={activeBtn === "Prosthodontist" ? "active Btnn" : "Btnn"}
                  onClick={() => setActiveBtn("Prosthodontist")}
                >
                  Prosthodontist
                </div>
                <div
                  className={activeBtn === "Pedodontist" ? "active Btnn" : "Btnn"}
                  onClick={() => setActiveBtn("Pedodontist")}
                >
                  Pedodontist
                </div>
              </div>
            )}
          </div>
          {
            filteredCards.length === 0 ? (
              <div className="NoCases">
                <p>No cases found</p>
              </div>
            )
            :
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
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {
              filteredCards.map((card) => (
                <SwiperSlide className="Cases" key={card.id}>
                  <div className="SingleCaseSlide">
                    <img src={card?.CoverImage} alt="Case" />
                    <div className="CaseHover">
                      <div className="primaryBtn" onClick={() => handleNavigate(card)}>
                        View Details <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="ArrowContainer">
              <div className="PervArrow">
                <Arrows />
              </div>
              <div className="NextArrow" id="nextErr">
                <Arrows />
              </div>
            </div>
          </div>
          }
        
        </div>
      </div>
    </div>
  );
};

export default Cases;
