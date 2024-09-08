
import Footer from "../component/Footer/Footer";

import OurExperince from "../component/OurExperince/OurExperince";

import ServiceHeader from "../component/ServiceHeader/ServiceHeader";
import Sevice2 from "../assets/images/Sevice2.png"
import Sevice1 from "../assets/images/Sevice1.png"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const SevicePage = () => {
  const {state}=useLocation()
  console.log(state)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return ( 
    <div>
<ServiceHeader />
<>
<div className="container">
<div className="d-flex flex-column align-items-center ServiceHeaderr">
<h2>
CDC SERVICES
            </h2>
            <div className="linerGrad"></div>
           
</div>
</div>
<div className="" id="OurExperince">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6 col-12">
            <section className="Testimonials">
              <h2 style={{fontSize:'22px'}} >{state?.firstTitle} </h2>
            
              <p>
            {
              state?.firstText
}</p>
          <div className="d-flex flex-wrap">

          <div className="ulClass">
            {
              state?.firstFeat?.map((item)=>(
                <div className="UlItem">
                <div></div>
                {item}</div>))
            }
              
            
            
            </div>
        
          </div>
            </section>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <img style={{width:'100%'}} src={state?.firstImageUrl} />
          </div>
        </div>
      </div>
    </div>
</>
<>
<div className="" id="OurExperince">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-5 col-md-6 col-12">
            <img style={{width:'100%'}} src={state?.secondImageUrl} />
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <section className="Testimonials">
              <h2 style={{fontSize:'22px'}} >  {state?.secondTitle}</h2>
            
              <p>
           {state?.secondtext} </p>
          <div className="d-flex flex-wrap">

          <div className="ulClass">
          
          {
              state?.secondFeat?.map((item)=>(
                <div className="UlItem">
                <div></div>
                {item}</div>))
            }
            
            
            </div>
        
          </div>
            </section>
          </div>
       
        </div>
      </div>
    </div>
</>
<Footer />
    </div> );
}
 
export default SevicePage;