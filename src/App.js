import React from "react";
import "./App.css";
import NavBar from "./components/firstbar";
import SecondNavBar from "./components/secondbar";
import DestockageComponent from "./components/destokage";
import ImageSlider from "./components/imageslider";
import MovingTextNavbar from "./components/movingtextnavbar";
import Navbar3 from "./components/thirdbar";
import FAQComponent from "./components/info";
import Appel from "./components/appeler";
import Infotwo from "./components/infotwo";
import ImageWithButton from "./components/guide.jsx";
import Filter from "./components/filter"
const App = () => {
  const productData = [
    {
      price: "$299.99",
      description: "Premium Sofa",
    }
    // No need for additional data since you mentioned one is enough
  ];

  return (
    <div className="app">
      <NavBar />
      <SecondNavBar />
      <DestockageComponent />
      <Filter/>
      <div className="slider-container">
        <ImageSlider productData={productData} />
        <ImageSlider productData={productData} />
        <ImageSlider productData={productData} />
      </div>
      <Navbar3 />
      <div className="slider-container2">
        <div className="left-sliders">
          <ImageSlider productData={productData} />
          <ImageSlider productData={productData} />
        </div>
        <div className="right-slider">
          <ImageSlider productData={productData} />
        </div>
      </div>
      <MovingTextNavbar />
      <FAQComponent />
      <Appel />
      <Infotwo />
      <ImageWithButton />
      <ImageWithButton />
      <ImageWithButton />
    </div>
  );
};

export default App;
