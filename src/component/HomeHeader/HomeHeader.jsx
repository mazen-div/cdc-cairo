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
