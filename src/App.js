import "./App.css";

import Navbar from "./Components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

import Footer from "./Components/Footer";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ShopingPage from "./Pages/ShopingPage";
import Login from "./Pages/Login";
import DetailsPage from "./Pages/DetailsPage";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 10, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route excat path="/" element={<Home />} />
          <Route excat path="/shop" element={<ShopingPage />} />
          <Route excat path="/shop/:productId" element={<DetailsPage />} />
          <Route excat path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
