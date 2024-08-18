import Cases from "../component/Cases/Cases";
import Footer from "../component/Footer/Footer";
import GetInTouch from "../component/GetInTouch/GetInTouch";
import HomeHeader from "../component/HomeHeader/HomeHeader";
import MidBanner from "../component/MiBanner/MidBanner";
import Opionin from "../component/Opionin/Opionin";
import OurClinc from "../component/OurClincSection/OurClinc";
import OurServices from "../component/OurServices/OurServices";
import TeamSection from "../component/TeamSection/TeamSection";
import ChatBtn from "../component/ChatBtn/ChatBtn";

import NavBar from "../component/navbar/Navbar";

const LandingPage = () => {
    return ( 
    <div>
<HomeHeader />
<OurClinc />
<OurServices/>
<Cases />
<MidBanner />
<TeamSection />
<Opionin />
<GetInTouch />
<Footer />
<ChatBtn />
    </div> );
}
 
export default LandingPage;