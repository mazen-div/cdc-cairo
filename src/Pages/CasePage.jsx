
import Footer from "../component/Footer/Footer";

import OurExperince from "../component/OurExperince/OurExperince";

import ServiceHeader from "../component/ServiceHeader/ServiceHeader";
import Sevice2 from "../assets/images/Sevice2.png"
import pic1 from "../assets/images/Pic1.png"
import pic2 from "../assets/images/Pic-2.png"
import pic3 from "../assets/images/Pic-3.png"
import pic4 from "../assets/images/Pic-1.png"

import Sevice1 from "../assets/images/Sevice1.png"
import CaseHeader from "../component/CaseHeader/CaseHeader";
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Cases from "../component/Cases/Cases";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import TeamSection from "../component/TeamSection/TeamSection";
const CasePage = () => {
  const [cards, setCards] = useState([]);
  const {state}=useLocation()
  console.log(state)
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
  useEffect(()=>{
    fetchCards()
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return ( 
    <div>
<CaseHeader />
<>

<div className="" id="OurExperince">
      <div className="container">
        <div className="row ">
     {
      state && (
        <>
           <div className="col-lg-5 col-md-6 col-12">
        <ImgComparisonSlider style={{width:'100%',borderRadius:'15px',minHeight:'400px'}}>
      <img slot="first" style={{height:'100%'}} src={state?.BeforeImage} />
      <img slot="second"style={{height:'100%',width:'100%'}} src={state?.AfterImage} />
    </ImgComparisonSlider>
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <section className="Testimonials">
            <h2 style={{fontSize:'18px',color:"#8F6F48  "}} >  {state?.SubTitle}</h2>
              <h2 style={{fontSize:'30px'}} >  {state?.Title}</h2>
            
              <p>
          {state?.Details} </p>
          <div className="d-flex flex-wrap">

          {/* <div className="ImagesContainer">
<div className="arrrow"></div>
<img src={pic1} />
<img src={pic1} />

<img src={pic2} />
<img src={pic3} />
<img src={pic4} />

          </div> */}
        
          </div>
            </section>
          </div>
      </>
      )
     }
        </div>
      </div>
    </div>
</>
<Cases casePage />
<TeamSection />
<Footer />
    </div> );
}
 
export default CasePage;