import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import OurVision from "./components/OurVision/OurVision";
import Advantages from "./components/Advantages";
import Future from "./components/Future";
import JouneryPhase from "./components/JouneryPhase/JouneryPhase";
const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Advantages />
      <Future />
      <JouneryPhase />
      <OurVision />
    </div>
  );
};

export default LandingPage;
