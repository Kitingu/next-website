import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import DiscoverSection from "../../components/DiscoverSection";
import DomesticLPG from "../../components/DomesticLPG";
import Reviews from "../../components/Reviews";
import BulkLPG from "../../components/BulkLPG";
import ExpertLPGSolutions from "../../components/ExpertLPGSolutions";
import OtogasSection from "../../components/OtogasSection";
import CarConversionSection from "../../components/CarConversionSection";
import NewsSection from "../../components/NewsSection";
import SustainabilityProgram from "../../components/SustainabilityProgram";
import PeopleHumJobs from "../../components/PeopleHumJobs";
import EsgSection from "../../components/EsgSection";
import Footer from "../../components/Footer";

export default function Home() {
  const router = useRouter();

  const refs = {
    hero: useRef(null),
    discover: useRef(null),
    domestic: useRef(null),
    reviews: useRef(null),
    bulk: useRef(null),
    expert: useRef(null),
    otogas: useRef(null),
    carConversion: useRef(null),
    esg: useRef(null),
    news: useRef(null),
    sustainability: useRef(null),
    jobs: useRef(null),
    peopleHum: useRef(null),
  };

  const scrollToSection = (section) => {
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const { scrollTo } = router.query;
    if (scrollTo) {
      scrollToSection(scrollTo);
      router.replace("/", undefined, { shallow: true });
    }
  }, [router.query]);

  return (
    <div className="overflow-hidden">
      <Header scrollToSection={scrollToSection} />

      <div ref={refs.hero}><HeroSection /></div>
      <div ref={refs.discover}><DiscoverSection scrollToSection={scrollToSection} /></div>
      <div ref={refs.domestic}><DomesticLPG /></div>
      <div ref={refs.reviews}><Reviews /></div>
      <div ref={refs.bulk}><BulkLPG /></div>
      <div ref={refs.expert}><ExpertLPGSolutions /></div>
      <div ref={refs.otogas}><OtogasSection /></div>
      <div ref={refs.carConversion}><CarConversionSection /></div>
      <div ref={refs.esg}><EsgSection /></div>
      <div ref={refs.news}><NewsSection /></div>
      <div ref={refs.sustainability}><SustainabilityProgram /></div>
      <div ref={refs.jobs}><PeopleHumJobs /></div>

      <Footer />
    </div>
  );
}
