import React, {useState} from "react";
import Navbar from "./components/navbar";
import Dropdown from "./components/Dropdown";
import GlobalStyle from './globalStyles';
import Footer from './components/Footer';
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pictures from "./pages/Pictures";
import Video from "./pages/Video";


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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pictures" component={Pictures} />
        <Route path="/video" component={Video} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
  }
export default App;
