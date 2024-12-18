import React from "react";
import { Container, Desc, Title, Wrapper } from "./Projects.styled";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Projects;
