import "./App.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { Body } from "./Body.styled";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import { Wrapper } from "./components/Wrapper/Wrapper";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
          <Experience />
          <Education />
        </Wrapper>
      </Body>
    </ThemeProvider>
  );
}

export default App;
