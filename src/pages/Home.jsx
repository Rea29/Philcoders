import React from "react";
import { Link } from "react-router-dom";
import Course from "../course/Course";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import Development from "../images/Development.png";
import Business from "../images/Business.png";
import Design from "../images/Design.png";
import ITandSoftware from "../images/IT and Software.png";
import Marketing from "../images/Marketing.png";
import Music from "../images/Music.png";
import PersonalDevelopment from "../images/Personal Development.png";
import Photography from "../images/Photography.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./css/Home.css";

import "./css/Home.css";
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <Image className="carousel-img" src={pic1} />
          <Carousel.Caption className="mb-5">
            <h1 className="display-4 fw-bold">WELCOME TO ℘hilCoders </h1>
            <p className="fs-4 fw-bold">Code Your Dreams Into Reality!</p>
            <Link to="/Course">
              <Button className="mb-5 btn btn-primary mt-2">
                GET STARTED NOW!
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <Carousel>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <Image className="carousel-img" src={pic1} />
          <Carousel.Caption>
            <h3>
              You've started a journey where every step forward is a triumph.
            </h3>
          </Carousel.Caption>
        </Carousel.Item> */}
      {/* <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <Image className="carousel-img" src={pic2} />
          <Carousel.Caption>
            <h3>
              Challenges may arise, but remember, they are the raw material for
              growth and resilience.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <Image className="carousel-img" src={pic3} />
          <Carousel.Caption>
            <h3>
              Challenges may arise, but remember, they are the raw material for
              growth and resilience.
            </h3>
          </Carousel.Caption>
        </Carousel.Item> */}
      {/* </Carousel> */}
      {/* <section className="d-flex flex-column text-center mt-5" id="home">
        <h1 className="display-4 fw-bold">WELCOME TO ℘hilCoders </h1>
        <p className="fs-4 fw-bold">Code Your Dreams Into Reality!</p>
        <Link to="/course">
          <Button className="btn btn-primary mt-2">GET STARTED NOW!</Button>
        </Link>
      </section> */}
      <Container className="mb-5">
        <h1 className="fw-bold mb-5">
          How learners like you are achieving their goals
        </h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={pic4} />
              <Card.Body className="card-testimony">
                <Card.Title className="fw-bold">Sarah M.</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <br />
                  PhilCoders has been a game-changer for me! The courses are so
                  well-structured and easy to follow. I've learned everything
                  from coding to digital marketing, and I'm already applying
                  these skills in my job. Highly recommend.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic5} />
              <Card.Body className="card-testimony">
                <Card.Title className="fw-bold">Emily S.</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <br />I was skeptical about online learning at first, but
                  PhilCoders exceeded my expectations. The instructors are
                  knowledgeable and engaging, and the platform is user-friendly.
                  I've completed several courses on PhilCoders, including
                  photography and language courses, and I'm amazed at how much
                  I've learned in such a short time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic6} />
              <Card.Body className="card-testimony">
                <Card.Title className="fw-bold">John D.</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <br />
                  As someone with a full-time job and a busy schedule,
                  PhilCoders has been a lifesaver. The flexibility to learn at
                  my own pace and the affordability of the courses are
                  unbeatable. I've taken courses on graphic design and project
                  management, and I've seen a significant improvement in my
                  skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic7} />
              <Card.Body className="card-testimony">
                <Card.Title className="fw-bold">Rachel K.</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <br />
                  PhilCoders has revolutionized the way I learn. The variety of
                  courses available is astounding, and the quality of
                  instruction is top-notch. I've taken courses on PhilCoders
                  ranging from business strategy to personal development, and
                  each one has left me feeling empowered and inspired. Thank
                  you, PhilCoders, for making lifelong learning accessible to
                  everyone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic8} />
              <Card.Body className="card-testimony">
                <Card.Title className="fw-bold">David L.</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <br />
                  PhilCoders has opened up a world of possibilities for me. I've
                  always been interested in learning new things, but I didn't
                  have the time or resources to pursue formal education. With
                  PhilCoders, I can explore a wide range of topics from the
                  comfort of my home. Whether it's learning to play the guitar
                  or mastering Excel, PhilCoders has something for everyone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={pic9} />
              <Card.Body className="card-testimony">
                <Card.Title className="fw-bold">Amanda R.</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <br />I can't thank PhilCoders enough for helping me
                  transition into a new career. After taking courses in web
                  development and digital marketing, I was able to land a job in
                  the tech industry. The skills I learned on PhilCoders have
                  been invaluable, and I'm excited to continue my learning
                  journey with them.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className=" mb-5">
        <h2 className="fw-bold mb-4">Top categories</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={Development} />
            </Card>
            <h5 className="fw-bold">Development</h5>
          </Col>
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={Design} />
            </Card>
            <h5 className="fw-bold">Design</h5>
          </Col>
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={Business} />
            </Card>
            <h5 className="fw-bold">Business</h5>
          </Col>
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={ITandSoftware} />
            </Card>
            <h5 className="fw-bold">IT and Software</h5>
          </Col>
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={Marketing} />
            </Card>
            <h5 className="fw-bold">Marketing</h5>
          </Col>
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={Music} />
            </Card>
            <h5 className="fw-bold">Music</h5>
          </Col>
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={PersonalDevelopment} />
            </Card>
            <h5 className="fw-bold">Personal Development</h5>
          </Col>
          <Col>
            <Card className="card-category">
              <Card.Img className="img-category" src={Photography} />
            </Card>
            <h5 className="fw-bold">Photography</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
