import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/global/Navbar";
import HomeIndex from "./pages/home/HomeIndex";
import AboutIndex from "./pages/about/AboutIndex";
import Footer from "./component/global/Footer";
import ContactIndex from "./pages/contact/ContactIndex";
import IndustriesIndex from "./pages/industries/IndustriesIndex";

function App() {
  return (
    <Router>
      {/* Navbar will always show */}
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/contact" element={<ContactIndex />} />
        <Route path="/industries/:key" element={<IndustriesIndex />} />
        <Route path="/industries" element={<IndustriesIndex />} />
        {/* add more pages here */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
