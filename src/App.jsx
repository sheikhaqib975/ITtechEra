import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Route change hone pe automatically top pe scroll kare
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Pages/Heropage";
import CompanyProfilepage3 from "./Pages/Page3";
import CompanyProfilepage4 from "./Pages/Page4";
import CompanyProfilepage5 from "./Pages/Page5";
import CompanyProfilepage6 from "./Pages/Page6";
import CompanyProfilepage7 from "./Pages/Page7";
import CompanyProfilepage8 from "./Pages/Page8";
import CompanyProfilepage9 from "./Pages/Page9";
import ContactPage from "./Pages/ContactUs";
import AboutPage from "./Pages/AboutUs";

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* ← yeh add karo */}
      <Navbar />
      <Routes>

        <Route path="/" element={
          <>
            <section id="home"><Hero /></section>
            <section id="page3"><CompanyProfilepage3 /></section>
            <section id="page4"><CompanyProfilepage4 /></section>
            <section id="page5"><CompanyProfilepage5 /></section>
            <section id="page6"><CompanyProfilepage6 /></section>
            <section id="page7"><CompanyProfilepage7 /></section>
            <section id="page8"><CompanyProfilepage8 /></section>
            <section id="page9"><CompanyProfilepage9 /></section>
            <Footer />
          </>
        } />

        <Route path="/contact" element={<><ContactPage /><Footer /></>} />
        <Route path="/about"   element={<><AboutPage /><Footer /></>} />

      </Routes>
    </Router>
  );
}

export default App;