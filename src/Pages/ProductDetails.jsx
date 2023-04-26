import ImageSlider from "../components/ProductDetails/ImageSlider/ImageSlider";
import Overview from "../components/ProductDetails/Overview/Overview";
import Description from "../components/ProductDetails/Description/Description";
import Address from "../components/ProductDetails/Address/Address";
import Details from "../components/ProductDetails/Details/Details";
import EnergyClass from "../components/ProductDetails/EnergyClass/EnergyClass";
import Features from "../components/ProductDetails/Features/Features";
import ContactForm from "../components/ProductDetails/ContactForm/ContactForm";

function ProductDetails() {
  return (
    <>
      <ImageSlider />
      <Overview />
      <Description />
      <Address />
      <Details />
      <EnergyClass />
      <Features />
      <ContactForm />
    </>
  );
}

export default ProductDetails;
