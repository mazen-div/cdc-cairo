import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import { EffectCards, Pagination } from "swiper/modules";
// import required modules
import SliderPic from "../../assets/images/Pic.png";
import Doctor from "../../assets/images/Doctor.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import CheckIcon from "../../Icons/CheckIcon";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
import { useState,useEffect } from "react";
const MidBanner = () => {
  const [cards, setCards] = useState([]);
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
  useEffect(()=>{
    fetchCards()
  },[])

  return (
    <div className=" MidBanner" >
      <div className="row align-items-center">
        <div className="col-lg-8"><section  className="OurClinc" id=""   >
<h2>
we understand you
</h2>
<div className="linerGrad"></div>

<p>
Vestibulum venenatis, libero nec malesuada maximus, leo quam ultricies
enim, eu rhoncus tortor dui at lorem. Nunc interdum, leo ac consequat
pellentesque.</p>
<div className="d-flex gap-5 align-items-center flex-wrap HeaderBtns">
  {
cards?.map(item=>(
  <div className="d-flex gap-2 align-items-center" >
      <CheckIcon />
      {item.Name}
  </div>
))
  }
  
</div>
</section></div>
        <div className="col-lg-4 d-flex justify-content-center">
       <img src={Doctor} />
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
