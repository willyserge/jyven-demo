import { connect } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutOne } from "../components/Layout";
import { HeroSliderOne, HeroSliderThree } from "../components/HeroSlider";
import { ProductTab, Services } from "../components/ProductTab";
import heroSliderData from "../data/hero-sliders/hero-slider-three.json";
import heroSliderData1 from "../data/hero-sliders/hero-slider-one.json";
import ser from "../data/hero-sliders/services.json";
import { HoverBannerOne } from "../components/Banner";

const Home = ({ saleProducts }) => {
  return (
    <LayoutOne aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderThree sliderData={heroSliderData} />

      <HoverBannerOne spaceBottomClass="space-mb--r100" />

      {/* product tab */}
      <ProductTab
        saleProducts={saleProducts}
      />

      <Services serviceProducts={ser} />

      <HeroSliderOne sliderData={heroSliderData1} />
      
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    saleProducts: getProducts(products, "decor", "topRated", 6),
    
  };
};

export default connect(mapStateToProps)(Home);
