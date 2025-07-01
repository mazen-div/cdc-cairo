import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";

import SliderPic from "../../assets/images/Pic.png";
import Doctor from "../../assets/images/bg-image-placeholder-1.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import CheckIcon from "../../Icons/CheckIcon";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc, arrayRemove, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MiBannerSecond = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const fetchCards = async () => {
    try {
      const collectionRef = collection(db, "languages", "languages", "Cards");
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

  const handleNavigate = () => {
    window.location.href = "/DentalTourism";
  };
  

  return (
    <section className="DentalTour" id="DentalTour">
      <div className="banner-content">
        <h2 className="banner-title">SMILE BRIGHTER</h2>
        <h2 className="banner-title">TRAVEL SMARTER</h2>
        <div className="banner-divider"></div>
        <button className="customButton" onClick={handleNavigate}>More Details</button>
      </div>
    </section>
  );
};

export default MiBannerSecond;