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
    <div className=" MidBanner"id="langmid" >
      <div className="row align-items-center">
        <div className="col-lg-12"><section  className="OurClinc" id=""   >
<h2>
we understand you
</h2>
<div className="linerGrad"></div>

<p>
No matter where you're from or what language you speak, we can connect with you on a deeper level. Our ability to communicate across linguistic and cultural boundaries allows us to bridge gaps and foster understanding.</p>
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
        
      </div>
    </div>
  );
};
  

export default MidBanner;
