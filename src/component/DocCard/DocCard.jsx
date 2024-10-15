import Facebook from "../../Icons/Facebook";
import Facebookfotter from "../../Icons/Facebookfotter";
import Linkedin from "../../Icons/Linkedin";
import LinkedinFooter from "../../Icons/LinkedinFooter";
import Twitter from "../../Icons/Twitter";
import TwitterFooter from "../../Icons/TwitterFooter";
import OurteamDox from "../../assets/images/OurteamDox.png";

const DocCard = ({state}) => {
    return ( 
        <div className="container" style={{marginTop:'150px'}}>
<div className="doc-card">
<div className="row">
    <div className="col-lg-6">
      <div className="DocImage">
        <img src={state?.secondImageUrl} />
      </div>
    </div>
    <div className="col-lg-6">
        <div className="DocDetails">
            <h2>{state?.Name}</h2>
            <p>{state?.Title}</p>

            <h3>Biography</h3>
            <div className="textInfo">{
                state?.Biography
}
</div>
       
        </div>
    </div>
</div>
</div>

        </div>
     );
}
 
export default DocCard;