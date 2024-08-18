import Facebookfotter from "../../Icons/Facebookfotter";
import Instagram from "../../Icons/Instagram";
import LinkedinFooter from "../../Icons/LinkedinFooter";
import TwitterFooter from "../../Icons/TwitterFooter";
import Logo from "../../assets/images/Logo.png";
import { useEffect, useState } from "react";
import { db } from "./../../firebase";
import { doc, getDoc, collection, addDoc, updateDoc,arrayRemove, getDocs } from "firebase/firestore";
const Footer = () => {
  const [text, setText] = useState({});
  const [images, setImages] = useState([]);
  const fetchCards = async () => {
    try {
      const collectionRef = doc(db, "contact", "text");


      const snapshot = await getDoc(collectionRef);
  setText(snapshot.data())
 
    


    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };
  useEffect(()=>{
    fetchCards()
  },[])
  return (
    <div className="footer">
      <div className="">
        <div className="row">
          <div className="col-lg-3 mt-2">
            <img src={Logo} width={"250px"} />
          
          </div>
        <div className="col-lg-2 mt-2">
            <ul>
                <li>
                    <a href="/#home">
                    Home
                    </a>
                </li>
                <li>
                    <a href="/#about">
                    About
                    </a>
                </li>
                <li>
                <a href="/#services">
                    Services
                    </a>
                </li>
                 <li>
                    <a href="/#cases"> 
                    Cases
                    </a>
                </li>
            </ul>
        </div>
        <div className="col-lg-2 mt-2">
        <ul className="secondul">
                <li>
                    <a href="#team">
                    Team
                    </a>
                </li>
                <li>
                    <a href="#testimonials">
                    Testimonials
                    </a>
                </li>
                <li>
                    <a href="#contact">
                    Contact
                    </a>
                </li>
                 <li>
                    <a href="#cases">
                    Gallery
                    </a>
                </li>
            </ul>
        </div>
        <div className="col-lg-2 mt-2">
            <span>
            FOLLOW US
            </span>
            <div className="d-flex mt-3 gap-3">
<a href={text.facebook}>
<Facebookfotter />
</a>
<a href={text.linkedin}>
<LinkedinFooter />
</a>

            </div>
            <div className="d-flex mt-3 gap-3">
            <a href={text.twitter}>
            <TwitterFooter />
</a>
<a href={text.instagram}>
<Instagram />
</a>

            </div>
        </div>
        <div className="col-lg-3 mt-2 d-flex align-items-center">
        <div className="input-group">
    <input type="email" className="input" id="Email" name="Email" placeholder="cdc@admin.io" autocomplete="off" />
    <input className="button--submit" value="Subscribe" type="submit" />
</div>

    
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
