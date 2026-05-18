import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import IntroLoader from "./components/IntroLoader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <>
      {loading ? (

        <IntroLoader />

      ) : (

        <div>

          <Navbar />

          <Hero />

          <About />

          <Skills />

          <Projects />

          <Contact />

          <Footer />

        </div>

      )}
    </>

  );
}

export default App;