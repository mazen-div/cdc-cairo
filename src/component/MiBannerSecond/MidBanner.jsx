import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import { EffectCards, Pagination } from "swiper/modules";
// import required modules
import SliderPic from "../../assets/images/Pic.png";
import Doctor from "../../assets/images/bg-image-placeholder-1.png";

import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import CheckIcon from "../../Icons/CheckIcon";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
import { useState,useEffect } from "react";
const MiBannerSecond = () => {
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
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5"><section  className="OurClinc dentalToursim" id=""   >
<h2>
Dental Tourism
</h2>
<div className="linerGrad"></div>

<p style={{textAlign:'start'}}>
At CDC, we warmly welcome international patients who seek high-quality dental care
along with a unique travel experience in Egypt. From the moment you arrive, we handle
every detail for you, including transportation, accommodation, and itinerary planning.
We’ll schedule your dental appointments and help you discover local attractions during
your stay. This is a fantastic opportunity to combine excellent dental care, a
comfortable experience, an unforgettable trip, and significant savings.
</p>

<p style={{textAlign:'start'}}>
If you're short on time, we’ve got you covered! Our clinic is equipped to complete most
procedures in just one or two appointments. Plus, we’re conveniently located just 10
minutes from the airport and surrounded by top-notch hotels.
Contact us to schedule your virtual consultation and learn more about our packages!</p>
<h2 style={{marginTop:'30px'}}>
We understand you 

</h2>
<div className="linerGrad"></div>

<p style={{textAlign:'start'}}>
We believe that effective communication is essential for success, which is why our
team is fluent in English, French, Dutch, and Arabic to ensure a seamless experience
for you.
</p>


<div className="d-flex gap-5 align-items-center flex-wrap HeaderBtns">

  
</div>
</section></div>
        <div className="col-lg-6 d-flex justify-content-center">
       <img style={{maxWidth:'400px'}} src={Doctor} />
        </div>
      </div>
    </div>
  );
};
  

export default MiBannerSecond;
