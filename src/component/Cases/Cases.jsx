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
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";

const Cases = ({ casePage }) => {
  const [activeBtn, setActiveBtn] = useState("All Cases");
  const [cards, setCards] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch specialties from Firebase
  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const specialtiesRef = collection(db, "Specialties");
        const snapshot = await getDocs(specialtiesRef);
        const specialtiesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setSpecialties(specialtiesList);
      } catch (error) {
        console.error("Error fetching specialties:", error);
      }
    };

    fetchSpecialties();
  }, []);

  // Fetch cards with ordering
  const fetchCards = async () => {
    setLoading(true);
    try {
      // Create a query with ordering by createdAt timestamp (newest first)
      const collectionRef = collection(db, "Cases", "Cases", "Cards");
      const cardsQuery = query(collectionRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(cardsQuery);
      
      const cardsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        // Handle case where createdAt might be a Firestore Timestamp object
        createdAt: doc.data().createdAt ? 
          (doc.data().createdAt.toDate ? doc.data().createdAt.toDate() : doc.data().createdAt) 
          : new Date()
      }));
      
      setCards(cardsData);
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleNavigate = (state) => {
    navigate("/CasePage", { state });
  };

  // Filter cards based on activeBtn
  const filteredCards = activeBtn === "All Cases" 
    ? cards 
    : cards.filter(card => card.Specialty === activeBtn);

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
            <h2 className="uniqfont">{!casePage ? "Cases" : "Similar Cases"}</h2>
            <div className="linerGrad"></div>
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
                
                {/* Dynamically generate specialty buttons */}
                {specialties.map((specialty) => (
                  <div
                    key={specialty.id}
                    className={activeBtn === specialty.value ? "active Btnn" : "Btnn"}
                    onClick={() => setActiveBtn(specialty.value)}
                  >
                    {specialty.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {loading ? (
            <div className="text-center my-5">
              <span className="loader"></span>
            </div>
          ) : filteredCards.length === 0 ? (
            <div className="NoCases">
              <p>No cases found</p>
            </div>
          ) : (
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
                {filteredCards.map((card) => (
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
              <div className="ArrowContainer" id="SACCC">
                <div className="PervArrow">
                  <Arrows />
                </div>
                <div className="NextArrow" id="nextErr">
                  <Arrows />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cases;