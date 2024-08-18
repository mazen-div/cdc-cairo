import { Button, Modal } from "react-bootstrap";
import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import NavBar from "../navbar/Navbar";
import { useState } from "react";

const HomeHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="homeHeader">
        <NavBar />
        <div className="container MainBanner">
          <section id="home">
            <h2>
              WE ARE <span style={{ color: "#8F6F48" }}>CDC</span>
            </h2>
            <div className="linerGrad"></div>
            <h3>
              <span style={{ color: "#8F6F48" }}>C</span>omputerized{" "}
              <span style={{ color: "#8F6F48" }}>D</span>ental{" "}
              <span style={{ color: "#8F6F48" }}>C</span>linic
            </h3>
            <p>
              Proin placerat posuere malesuada. Nulla ac condimentum diam, id{" "}
              <br /> pulvinar orci. Morbi eu sapien nibh.
            </p>
            <div className="d-flex gap-5 align-items-center flex-wrap HeaderBtns">
              <div
                className="primaryBtn"
                style={{
                  color: "white",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
                
              >
             <a href="#cases" style={{color:"white",textDecoration:'none',fontSize:'20px'}}>
             SEE OUR GALLERY <ArrowIcon />
             </a>
              </div>
              <div
                onClick={() => handleShow()}
                className="d-flex gap-2 align-items-center"
                style={{
                  color: "white",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontSize:'20px'
                }}
              >
                <PlayIcon />
                who we are ?
              </div>
            </div>
          </section>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width={"100%"}
            height={"300px"}
            src="https://www.youtube.com/embed/BPpIoeTfvbQ?si=s7cGrlf5UOmMhLFx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomeHeader;
