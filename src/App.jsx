import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import { Body } from "./Body.styled";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import { Wrapper } from "./components/Wrapper/Wrapper";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(null);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const currentTheme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      // Default to system preference if no theme is saved
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
          <Education />
          <Contact />
        </Wrapper>
        <Footer />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </Body>
    </ThemeProvider>
  );
}

export default App;
