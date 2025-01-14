//import { useState } from "react";
// import "./App.css";
import Landing from "./components/landing";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
