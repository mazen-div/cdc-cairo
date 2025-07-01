import { Button, Modal } from "react-bootstrap";
import ArrowIcon from "../../Icons/Arrow";
import PlayIcon from "../../Icons/PlayIcon";
import NavBar from "../navbar/Navbar";
import { useState } from "react";
import BgVideo from "../../assets/BgVideo.mp4";
import BgCDC from "../../assets/BgCDC.mp4";

const HomeHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="homeHeader" id="home">
        <NavBar />
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source
            src="https://cdn-cf-east.streamable.com/video/mp4/tpae9e.mp4?Expires=1739538942717&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Ki45B2eKLTCmhQ8Wx~m27f5R5jUlgHdcV9OH6HOejzzBhigYxgxGCfzOHZM3~8SWC7SlsZK0CdjceRWquZMi4buPsv0~M5j1thN-s~bqocxXf6l-FfcMz~m9OJIF70Cf6tcbUoEzw0c0pSlzYMv9Vm7f3daXgegPT3VT4PCq3200xCvWcoSG1-Y82-hmDuVvmsSUSojmdSUVzLJxByfBeEV517M3OT1S~tuqaMk4PAbYpAHfHbYh53yJU7CLzdzr4A-eIhyAhjxYTuJ6I5qyI7SGW0DJsEKL4NJrngBU~HuVodh5FhLXruJTbya62NSN7SzI2ZMlrD8CNj2l3BHAhg__"
              //src={"https://cdn-cf-east.streamable.com/video/mp4/eccs4b.mp4?Expires=1739436491178&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Udf2I2Q2coKDEJInaSeJpIcoW3PB0kLMjhYU1kUwmm3stdQ6yi0pcFz5pZT4On-G0-HIaXm-VBbicMAG6hcWqjHnCSLudrmDqbh4~yRY4K2p5Ok1ANGaiob6mJWbrLOBTfGcj9vgowZqUZ1whk4HUhAyz9~UA8PbueARCrUKAJm2MTzypRAXuVOD8aTKVTw8~2ZNEgOemLTVVA0-wr5g83rFogQEdNoNrfsoHI3AQocGb6cjIVEJ3f1fauj1o-OMIP-QFUPq4eOvptna1i8rJCg0up4tq6LTj0h22HshvTE60vJHudXYg6uQHbnWCN~uF2OquXLNgTevbZvUkGk7Dg__"} // Your hosted video file URL here
            //https://d3khrpith9uv3a.cloudfront.net/l9iq5f%2Ffile%2F8595c315129fd5eb5f72bc0bd189c673_d8b96a750390dd1ab41943c1b0db140d.mp4?response-content-disposition=inline%3Bfilename%3D%228595c315129fd5eb5f72bc0bd189c673_d8b96a750390dd1ab41943c1b0db140d.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1739206120&Signature=VWsI6OghKiUO4DxXpF3jZVkCKOqS9F01459e87kfjZStZ7xOdhGwqn6ZH-SrXEuLpKkY2us9EroJ9OREL3EBW-Ay60KlGVlwJeCsyY27TfJi2YeNPWNperpBGsOdCXVks7MKngWxPvJnRE00CSPnbvmEgR8JJdeYFQ8~ielfmXQeSH4tSRBgrA1bNVSaHTj1n2zlmYGVNIdAmWuck8F~Fe3fHf-1L50fnqFFfkgYxjrKPhAlLhxfyW5R-qitp-XrCLj7wxLNbJfhRdZyqysOqhzBfFzqYUz-eT2ufqUEiqLPy5QchkjP9fJte0H2oywI2qdsyH8AhOtF4NmhMD0g2g__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ
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
