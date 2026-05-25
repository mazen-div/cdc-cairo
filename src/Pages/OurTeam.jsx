import { useLocation } from "react-router-dom";
import Cases from "../component/Cases/Cases";
import DocCard from "../component/DocCard/DocCard";
import Footer from "../component/Footer/Footer";
import GetInTouch from "../component/GetInTouch/GetInTouch";
import HomeHeader from "../component/HomeHeader/HomeHeader";
import MidBanner from "../component/MiBanner/MidBanner";
import Opionin from "../component/Opionin/Opionin";
import OurClinc from "../component/OurClincSection/OurClinc";
import OurExperince from "../component/OurExperince/OurExperince";
import OurServices from "../component/OurServices/OurServices";
import OurTeamHeader from "../component/OurTeamHeader/OurTeamHeader";
import TeamSection from "../component/TeamSection/TeamSection";
import NavBar from "../component/navbar/Navbar";
import { useEffect } from "react";

const OurTeam = () => { 
const {state}=useLocation()
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return ( 
    <div>
<OurTeamHeader />
<DocCard state={state} />
<OurExperince state={state} />
<Footer />
    </div> );
}
 
export default OurTeam;