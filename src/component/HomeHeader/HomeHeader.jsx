import { Button, Modal } from "react-bootstrap";
import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import NavBar from "../navbar/Navbar";
import { useState } from "react";
import BgVideo from "../../assets/BgVideo.mp4";
const HomeHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="homeHeader">
        <NavBar />
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source
              src={BgVideo} // Your hosted video file URL here
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container MainBanner">
          {/* Your content goes here */}
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HomeHeader;
