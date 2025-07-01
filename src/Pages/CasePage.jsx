import Footer from "../component/Footer/Footer";
import OurExperince from "../component/OurExperince/OurExperince";
import ServiceHeader from "../component/ServiceHeader/ServiceHeader";
import CaseHeader from "../component/CaseHeader/CaseHeader";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Cases from "../component/Cases/Cases";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import TeamSection from "../component/TeamSection/TeamSection";

const CasePage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fetchCards = async () => {
    try {
      setLoading(true);
      const collectionRef = collection(db, "Cases", "Cases", "Cards");
      const snapshot = await getDocs(collectionRef);
      const cardsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
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

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setTimeout(() => setLoading(false), 500); // Simulate loading feedback
  }, [state]); // Re-run when state changes

  return (
    <div>
      <CaseHeader />
      <div className="" id="OurExperince">
        <div className="container">
          <div className="row">
            {loading ? (
              <div className="text-center w-100 py-5">
                <h3>Loading new case...</h3>
              </div>
            ) : (
              state && (
                <>
                  <div className="col-lg-5 col-md-6 col-12">
                    <ImgComparisonSlider
                      style={{ width: "100%", borderRadius: "15px"}}
                    >
                      <img slot="first" style={{ height: "100%" }} src={state?.BeforeImage} />
                      <img slot="second" style={{ height: "100%", width: "100%" }} src={state?.AfterImage} />
                    </ImgComparisonSlider>
                  </div>
                  <div className="col-lg-7 col-md-6 col-12 d-flex flex-column justify-content-center">
                    <section className="Testimonials">
                      <h2
                        style={{ fontSize: "18px", color: "#8F6F48", whiteSpace: "pre-wrap" }}
                      >
                        {state?.SubTitle}
                      </h2>
                      <h2 style={{ fontSize: "30px", whiteSpace: "pre-wrap" }}>{state?.Title}</h2>
                      <p style={{ whiteSpace: "pre-wrap" }}>{state?.Details}</p>
                    </section>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
      <Cases casePage />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default CasePage;