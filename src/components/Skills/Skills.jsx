import React from "react";
import { skills } from "../../data/constants";
import {
  Container,
  Desc,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillsContainer,
  SkillTitle,
  Title,
  Wrapper,
} from "./Skills.styled";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I working.</Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill key={item.id}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem key={skill.id}>
                    <SkillImage src={skill.image} alt="" />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
