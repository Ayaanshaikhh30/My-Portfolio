import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/skills.jsx";
import About from "./components/About.jsx";
import Work from "./components/work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work/>
      <Contact/>
      <Footer/>

      
  </>
  );
}

export default App;
