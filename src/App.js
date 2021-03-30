import React, {useState} from "react";
import Navbar from "./components/navbar";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from "./data/SliderData";
import { InfoData, InfoDataTwo } from "./data/InfoData";

function App() {
const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
  }
export default App;
