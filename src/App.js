import React, {useState, useEffect, useLayoutEffect} from "react";
import Navbar from "./components/navbar";
import Dropdown from "./components/Dropdown";
import GlobalStyle from './globalStyles';
import Footer from './components/Footer';
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pictures from "./pages/Pictures";
import Resume from './pages/Resume';
import Video from "./pages/Video";
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();
const toggle = () => {
  setIsOpen(!isOpen)
}
 useLayoutEffect(() => {
   window.scrollTo(0,0)
 }, [location.pathname])

 useEffect(() => {
   Aos.init({});
 }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pictures" component={Pictures} />
        <Route path="/video" component={Video} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
  }
export default App;
