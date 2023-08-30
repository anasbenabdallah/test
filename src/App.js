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
import ImageWithButton from "./components/guide.jsx"

const App = () => {
  const images = [
    "https://www.lamaisonconvertible.fr/cdn/shop/files/TDSSIMONET-Photo_20packshot_20banquette_20bz_20simone_20140_20tissu_20Preston_20Bleu_20Fonc_C3_A9_201.jpg?format=webp&v=1693321829&width=1024",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/TDSSIMONET-Photo_20packshot_20banquette_20bz_20simone_20140_20ouvert_20tissu_20Preston_20Bleu_20Fonc_C3_A9.jpg?format=webp&v=1693321822&width=1024",
    "https://www.lamaisonconvertible.fr/cdn/shop/files/TDSSIMONET-Photo_20packshot_20banquette_20bz_20simone_20140_20tissu_20Preston_20Bleu_20Fonc_C3_A9_203.jpg?format=webp&v=1693321826&width=1024",
    // Add more image URLs
  ];
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
      <div className="slider-container">
      <ImageSlider images={images} productData={productData} />
      <ImageSlider images={images} productData={productData} />
      <ImageSlider images={images} productData={productData} />
      </div>
      <Navbar3/>
      <div className="slider-container2">
        <div className="left-sliders">
          <ImageSlider images={images} productData={productData} />
          <ImageSlider images={images} productData={productData} />
        </div>
        <div className="right-slider">
          <ImageSlider images={images} productData={productData} />
        </div>
      </div>
      <MovingTextNavbar />
      <FAQComponent/>
      <Appel/>
      <Infotwo/>
      <ImageWithButton/>
      <ImageWithButton/>
      <ImageWithButton/>
    </div>
  );
};

export default App;
