import { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"; // Import Firebase functions
import { db } from "./../../firebase"; // Import your Firebase config

import NameIcon from "./../../assets/images/NameIcon.png";
import RateIcon from "../../assets/images/RateIcon.png";
import MessageIcon from "../../assets/images/MessageIcon.png";
import PhoneIcon from "../../assets/images/PhoneIcon.png";
import CloseIcon from "../../assets/images/CloseIcon.png";
import NewMessageIcon from "../../assets/images/NewMessageIcon.png";

import "rsuite/dist/rsuite.min.css";
import { Rate } from "rsuite";

const ChatBtn = () => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    rating: 4,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = collection(db, "Messages");
      await addDoc(docRef, formData);
      // Uncomment the following lines if you want to add a new document
      // await addDoc(collection(db, "OurClinc"), {
      //   items: ['asda', 'dasdas', 'asdas']
      // });

    } catch (err) {
      console.error("Error updating document: ", err);
    }
    setLoading(false);
  };

  return (
    <div className={active ? "ChatBtn Active" : "ChatBtn"}>
      <div className={active ? "ChatDiv Active" : "ChatDiv"}>
        <span>We care about your opinion</span>
        <div className="ContacntContaincer">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 d-flex align-items-start gap-2">
                <img src={NameIcon} alt="Name Icon" />
                <input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-6 d-flex align-items-start gap-2">
                <img src={PhoneIcon} alt="Phone Icon" />
                <input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 d-flex align-items-start gap-2 mt-3">
                <img src={MessageIcon} alt="Message Icon" />
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 d-flex align-items-start gap-2 mt-3">
                <img src={RateIcon} alt="Rate Icon" />
                <Rate
                  defaultValue={formData.rating}
                  color="#FFA534"
                  size="sm"
                  onChange={handleRatingChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="ChatBTTTN" disabled={loading}>
                  {loading ? "Sending..." : "Send review"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="MainChat">
          {active ? (
            <img 
            id="xicon"
          
              src={CloseIcon}
              alt="Close Icon"
              onClick={() => setActive(!active)}
            />
          ) : (
            <img
              src={NewMessageIcon}
              alt="New Message Icon"
              onClick={() => setActive(!active)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBtn;
