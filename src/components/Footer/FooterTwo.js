import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { animateScroll } from "react-scroll";
import { SubscribeEmailTwo } from "../Newsletter";

const FooterTwo = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer className="space-pt--100 space-pb--50" style={{backgroundColor: "#333333", color: "white"}}>
      <Container className="wide" style={{color: "white"}}>
        <Row>
          <Col className="footer-single-widget space-mb--50">
            {/* logo */}
            <div className="logo space-mb--35">
            </div>

            {/*=======  copyright text  =======*/}
            <div className="footer-single-widget__copyright" style={{color: "white"}}>
              &copy; {new Date().getFullYear() + " "}
              <a href="https://www.hasthemes.com" target="_blank" style={{color: "white"}}>
                jyven
              </a>
              <span style={{color: "white"}}>All Rights Reserved</span>
            </div>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title" style={{color: "white"}}>ABOUT</h5>
            <nav className="footer-single-widget__nav">
              <ul style={{color: "white"}}>
                <li>
                  <a href="#" style={{color: "white"}}>About us</a>
                </li>
                <li>
                  <a href="#" style={{color: "white"}}>Store location</a>
                </li>
                <li>
                  <a href="#" style={{color: "white"}}>Contact</a>
                </li>
                <li>
                  <a href="#" style={{color: "white"}}>Orders tracking</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title" style={{color: "white"}}>USEFUL LINKS</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <a href="#" style={{color: "white"}}>Returns</a>
                </li>
                <li>
                  <a href="#" style={{color: "white"}}>Support Policy</a>
                </li>
                <li>
                  <a href="#" style={{color: "white"}}>Size guide</a>
                </li>
                <li>
                  <a href="#" style={{color: "white"}}>FAQs</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title" style={{color: "white"}}>FOLLOW US ON</h5>
            <nav className="footer-single-widget__nav footer-single-widget__nav--social">
              <ul>
                <li>
                  <a href="https://www.twitter.com" style={{color: "white"}}>
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com" style={{color: "white"}}>
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" style={{color: "white"}}>
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" style={{color: "white"}}>
                    <FaYoutube /> Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <div className="footer-subscribe-widget">
              <h2 className="footer-subscribe-widget__title" style={{color: "white"}}>Subscribe.</h2>
              <p className="footer-subscribe-widget__subtitle" style={{color: "white"}}>
                Subscribe to our newsletter to receive news on update.
              </p>
              {/* email subscription */}
              <SubscribeEmailTwo mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
            </div>
          </Col>
        </Row>
      </Container>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowRoundUp />
      </button>
    </footer>
  );
};

export default FooterTwo;
