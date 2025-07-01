import { useEffect, useState } from "react";
import { db } from "./../../firebase";
import {
  doc,
  getDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import Facebookfotter from "../../Icons/Facebookfotter";
import Instagram from "../../Icons/Instagram";
import LinkedinFooter from "../../Icons/LinkedinFooter";
import Logo from "../../assets/images/Logo2.png";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Footer = () => {
  const [text, setText] = useState({});
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      setAlertVariant("danger");
      setAlertMessage("Please enter a valid email address.");
      return;
    }
  
    try {
      const docRef = collection(db, "Subsicribed");
      await addDoc(docRef, {
        email: email,
        Date: new Date().toLocaleDateString(),
      });
  
      setAlertVariant("success");
      setAlertMessage("Subscription successful! Thank you for subscribing.");
      setEmail("");
    } catch (err) {
      console.error("Error updating document: ", err);
      setAlertVariant("danger");
      setAlertMessage("Subscription failed. Please try again later.");
    }
  };
  

  const fetchCards = async () => {
    try {
      const collectionRef = doc(db, "contact", "text");
      const snapshot = await getDoc(collectionRef);
      setText(snapshot.data());
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Container fluid className="footer py-4">
      {alertMessage && <Alert variant={alertVariant}>{alertMessage}</Alert>}
      <Row>
        <Col lg={3} className="mt-2">
          <img src={Logo} width={"250px"} alt="Logo" />
        </Col>
        <Col lg={2} className="mt-2">
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#cases">Cases</a></li>
          </ul>
        </Col>
        <Col lg={2} className="mt-2">
          <ul className="secondul">
            <li><a href="/#team">Team</a></li>
            <li><a href="/#testimonials">Testimonials</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </Col>
        <Col lg={2} className="mt-2">
          <span>FOLLOW US</span>
          <div className="d-flex mt-3 gap-3">
            <a href={text.facebook}><Facebookfotter /></a>
            <a href={text.linkedin}><LinkedinFooter /></a>
          </div>
          <div className="d-flex mt-3 gap-3">
            <a href={text.instagram}><Instagram /></a>
          </div>
        </Col>
        <Col lg={3} className="mt-2 d-flex align-items-center">
          <div className="input-group">
            <input
              type="email"
              className="input"
              id="Email"
              name="Email"
              placeholder="cdc@admin.io"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="button--submit"
              value="Subscribe"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
