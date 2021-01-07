import Swiper from "react-id-swiper";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const HeroSliderOne = ({ sliderData }) => {
  const params = {
    loop: true,
    speed: 1000,
    spaceBetween: 300,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav"></button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav"></button>
    )
  };
  return (
    <div className="hero-slider-one text-center space-mb--r100">
    <div className="image-cta__content text-center space-mb--50">
      <h2 className="space-mb--30">Deals For You</h2>
    </div>
    <div>
      <Container>
        <div className="hero-slider-one__wrapper">
          <Swiper {...params}>
            {sliderData &&
              sliderData.map((single) => {
                return (
                <Row>
                  <Col lg={8} className="ml-auto mr-auto">
                    {/*=======  image  =======*/}
                    <div className="image-cta__image space-mb--35 space-ml--100">
                      <img
                        src={process.env.PUBLIC_URL + single.image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    {/*=======  content  =======*/}
                    <div className="image-cta__content">
                      <h3 className="sub-title">BRAND NAME</h3>
                      <h2
                        className="space-mb--30"
                        dangerouslySetInnerHTML={{ __html: "Offer and major sale running copies" }}
                      />
                      <Link href={single.url} as={process.env.PUBLIC_URL + single.url}>
                        <a className="lezada-button lezada-button--medium">SHOP NOW</a>
                      </Link>
                    </div>
                  </Col>
                </Row>
                );
              })}
          </Swiper>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default HeroSliderOne;
