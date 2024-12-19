import React, { useState } from "react";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./Projects.styled";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const toggleOptions = ["all", "web app", "android app", "machine learning"];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          {toggleOptions.map((option) => (
            <>
              <ToggleButton
                active={toggle === option}
                value={option}
                onClick={() => setToggle(option)}
              >
                {option}
              </ToggleButton>
              {option !== toggleOptions[toggleOptions.length - 1] && (
                <Divider />
              )}
            </>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((item) => toggle === "all" || item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
