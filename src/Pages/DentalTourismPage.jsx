import React, { useEffect } from 'react';
import OurTeamHeader from '../component/OurTeamHeader/OurTeamHeader';
import DocCard from '../component/DocCard/DocCard';
import OurExperince from '../component/OurExperince/OurExperince';
import Footer from "../component/Footer/Footer";
import { useLocation } from 'react-router-dom';
import NavBar from '../component/navbar/Navbar';
import OurClinc from '../component/OurClincSection/OurClinc';
import AbotUs from '../component/abt/Abot';
import GetInTouch from '../component/GetInTouch/GetInTouch';
import Dental from '../component/MiBannerSecond/Dental';
const DentalTourismPage = () => {
    const {state}=useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
        return ( <>
            <div className="DentalHader"   >
            <NavBar  />
            <div className="container MainBanner "  >
            <div className="d-flex flex-column align-items-center" id='HADMOB'>
                <h2>
                Dental Tourism
                </h2>
            <p>
            " WE UNDERSTAND YOU ... "

</p>
            </div>
        
            </div>
                    </div>
                    
                    <Dental />
                  
                   
<Footer />
                    </>
                    );
}

export default DentalTourismPage;
