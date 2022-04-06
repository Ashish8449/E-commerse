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
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route excat  path="/" element={<Home />} />
          <Route excat path="/shop" element={<ShopingPage/>} />
          <Route excat path="/shop/:productId" element={<DetailsPage/>} />
          <Route excat path="/login" element={<Login/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
