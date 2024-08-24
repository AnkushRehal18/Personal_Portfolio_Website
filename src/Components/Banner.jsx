import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
  const [loopNum, setLoopNum] = useState(0); // the text currently on the screen
  const [isDeleting, setIsDeleting] = useState(false); // the text which will be removed
  const toRotate = ["Web Developer","Front End Developer"]; // the quotes
  const [text, setText] = useState(""); // to show on the front end
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({isVisible})=>
          <div className={isVisible ? "animated__animated animate__fadeIn":""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I am a `}<span className="wrap">{text}</span>
            </h1>
            <p>
            I'm a fresh web developer excited to dive deep into new technologies and always eager to learn and grow, I’m ready to dive into exciting web projects.
            </p>
            <a href="./Ankush_resume.pdf.pdf" download >
            <button>Download CV</button>
            </a>
           
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
