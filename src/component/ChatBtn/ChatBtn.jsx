import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../firebase";

import { Alert } from "react-bootstrap"; // Import Bootstrap Alert
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "rsuite/dist/rsuite.min.css";
import { Rate } from "rsuite";

import NameIcon from "./../../assets/images/NameIcon.png";
import RateIcon from "../../assets/images/RateIcon.png";
import MessageIcon from "../../assets/images/MessageIcon.png";
import PhoneIcon from "../../assets/images/PhoneIcon.png";
import CloseIcon from "../../assets/images/CloseIcon.png";

const ChatBtn = () => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null); // New state for alerts
  const [alertVariant, setAlertVariant] = useState("success"); // Success or danger
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
    setAlertMessage(null); // Reset previous alerts
    try {
      const docRef = collection(db, "Messages");
      await addDoc(docRef, formData);
      setAlertMessage("Thank you for your review! 🎉");
      setAlertVariant("success");
      setFormData({ name: "", phone: "", message: "", rating: 4 });
    } catch (err) {
      console.error("Error submitting review:", err);
      setAlertMessage("Something went wrong. Please try again.");
      setAlertVariant("danger");
    }
    setLoading(false);

    // Auto-hide alert after 3 seconds
    setTimeout(() => setAlertMessage(null), 3000);
  };

  return (
    <div className={active ? "ChatBtn Active" : "ChatBtn"}>
      <div className={active ? "ChatDiv Active" : "ChatDiv"}>
        <span>We care about your opinion</span>
        <div className="ContacntContaincer">
          {alertMessage && (
            <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
              {alertMessage}
            </Alert>
          )}
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
            <svg
              fill="#ffffff"
              height="40px"
              width="40px"
              viewBox="0 0 458 458"
              onClick={() => setActive(!active)}
              style={{ cursor: "pointer" }}
            >
              <g>
                <g>
                  <path d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243 c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252 C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062 c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15 s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15 s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"></path>
                </g>
              </g>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBtn;
