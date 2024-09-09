import React from "react";
import HeroSection from "../Components/HeroSection";
import FeatureSection from "../Components/landingPageSection/FeatureSection";
import FruitShop from "../Components/landingPageSection/FruitShop";
import FeatureService from "../Components/landingPageSection/FeatureService";
import BannarSection from "../Components/landingPageSection/BannarSection";
import BestSalerSection from "../Components/landingPageSection/BestSalerSection";
import FactSection from "../Components/landingPageSection/FactSection";
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <FruitShop />
      <FeatureService />
      <BannarSection />
      <BestSalerSection />
      <FactSection />
    </>
  );
};

export default LandingPage;
