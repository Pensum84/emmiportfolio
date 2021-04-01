import Features from '../components/Features';
import InfoSection from '../components/InfoSection';
import { InfoDataTwo } from "../data/InfoData";

const About = () => {
  return(
    <>
    <InfoSection {...InfoDataTwo} />
    <Features />
    </>
  );}

export default About;
