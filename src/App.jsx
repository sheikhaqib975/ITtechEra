import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Home Sections
import Hero from "./Pages/Heropage";
import CompanyProfilepage3 from "./Pages/Page3";
import CompanyProfilepage4 from "./Pages/Page4";
import CompanyProfilepage5 from "./Pages/Page5";
import CompanyProfilepage7 from "./Pages/Page7";
import CompanyProfilepage8 from "./Pages/Page8";
import CompanyProfilepage9 from "./Pages/Page9";

// Pages
import AboutPage from "./Pages/AboutUs";
import ContactPage from "./Pages/ContactUs";
import ServicesPage from "./Pages/Services"; // <-- Your new Services page
import TCPage from "./Pages/TermsCondition";
import PrivacyPage from "./Pages/PrivacyPolicy";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>

              <section id="page3">
                <CompanyProfilepage3 />
              </section>

              <section id="page4">
                <CompanyProfilepage4 />
              </section>

              <section id="page5">
                <CompanyProfilepage5 />
              </section>

              {/* Services section removed */}

              <section id="page7">
                <CompanyProfilepage7 />
              </section>

              <section id="page8">
                <CompanyProfilepage8 />
              </section>

              <section id="page9">
                <CompanyProfilepage9 />
              </section>

              <Footer />
            </>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Footer />
            </>
          }
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={
            <>
              <ServicesPage />
              <Footer />
            </>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
            </>
          }
        />

        {/* TERMS */}
        <Route
          path="/terms"
          element={
            <>
              <TCPage />
              <Footer />
            </>
          }
        />

        {/* PRIVACY */}
        <Route
          path="/privacy"
          element={
            <>
              <PrivacyPage />
              <Footer />
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;