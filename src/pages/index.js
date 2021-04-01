import React from 'react';
import Features from "../components/Features";
import Hero from "../components/Hero";
import { InfoData } from '../data/InfoData';
import { SliderData } from "../data/SliderData";
import InfoSection from "../components/InfoSection";

const Home = () => {
    return (
      <>
        <Hero slides={SliderData} />
        <InfoSection {...InfoData} />
        <Features />
      </>
    );
}

export default Home;
