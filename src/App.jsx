import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


// Home Sections
import Hero from "./Pages/Heropage";
import DigitalExcellence from "./Pages/DigitalExcellence";
import OriginStory from "./Pages/OriginStory";
import WhatWeBelieve from "./Pages/Whatwebelief";
import Servicescard from "./Pages/ServicesCards";
import ImageSliders from "./Pages/Imageslider";
import OurClients from "./Pages/OurClients";
import ClientTrust from "./Pages/Clienttrust";
import Milestones from "./Pages/Milestones";
import WorkWithUs from "./Pages/Workwithus";
import ReviewsSection from "./Pages/ReviewsSection";

// Pages
import AboutPage from "./Pages/AboutUs";
import ContactPage from "./Pages/ContactUs";
import ServicesPage from "./Pages/Services";
import ServiceDetails from "./Pages/ServicesDetails";
import TCPage from "./Pages/TermsCondition";
import PrivacyPage from "./Pages/PrivacyPolicy";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
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
                <DigitalExcellence />
              </section>

              <section id="page4">
                <OriginStory />
              </section>

              <section id="page5">
                <WhatWeBelieve />
              </section>

              <section id="page6">
                <Servicescard />
              </section>

              <section id="page7">
                <ImageSliders />
              </section>

              <section id="page8">
                <OurClients />
              </section>

              <section id="page9">
                <ClientTrust />
              </section>

              <section id="page10">
                <ReviewsSection />
              </section>

              <section id="page11">
                <Milestones />
              </section>

          
              <section id="page12">
                <WorkWithUs />
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

        <Route
          path="/services/:slug"
          element={
            <>
              <ServiceDetails />
              <Footer />
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
