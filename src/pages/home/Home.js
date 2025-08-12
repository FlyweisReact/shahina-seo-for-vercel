/** @format */
import React, { useEffect, useState, Suspense } from "react";
import HeroSection from "../../components/home/HeroSection";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import DynamicHelmet from "../../components/Helmet/DynamicHelmet";

// Lazy loaded components (below-the-fold)
const Services = React.lazy(() => import("../../components/home/Services"));
const Description = React.lazy(() => import("../../components/home/Description"));
const LatestNews = React.lazy(() => import("../../components/home/LatestNews"));
const Testimonials = React.lazy(() => import("../../components/PaymentPlans/Testimonials"));
const GallarySlider = React.lazy(() => import("../../components/Sliders/GallarySlider"));
const Partners = React.lazy(() => import("../../components/Partners/Partners"));
const Reviews = React.lazy(() => import("../../components/Reviews/Reviews"));
const Awards = React.lazy(() => import("../../components/Awards/Awards"));
const OfferBanner = React.lazy(() => import("../../components/OfferBanner/OfferBanner"));
const MobileOfferBanner = React.lazy(() => import("../../components/OfferBanner/MobileOfferBanner"));

const Home = () => {
  const [metaResponse, setMetaResponse] = useState(null);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  useEffect(() => {
    getApi({
      url: endPoints.metaTags.homePage,
      setResponse: setMetaResponse,
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setTimeout(() => setOpen1(true), 500);
    } else {
      setOpen(true);
    }
  }, []);

  return (
    <div>
      {metaResponse && (
        <DynamicHelmet
          title={metaResponse?.data?.title}
          description={metaResponse?.data?.description}
        />
      )}

      {/* Above-the-fold */}
      <HeroSection />

      {/* Below-the-fold components loaded lazily */}
      <Suspense fallback={<div style={{ height: "200px" }}>Loading...</div>}>
        <Awards />
        <Services />
        <Reviews />
        <Testimonials />
        <div className="mb-14"></div>
        <Description />
        <Partners />
        <LatestNews />
        <GallarySlider />
        <OfferBanner open={open} onClose={() => setOpen(false)} />
        <MobileOfferBanner open={open1} onClose={() => setOpen1(false)} />
      </Suspense>
    </div>
  );
};

export default Home;
