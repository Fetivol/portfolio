import React from "react";

import {
  Body,
  CardName,
  CardInfo,
  CardDate,
  Card,
  Description,
  Document,
  Image,
  ItemWrapper,
  Skill,
  Skills,
  Span,
  Top,
} from "./Cards.styled";

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} alt="" />
        <Body>
          <CardName>{experience.role}</CardName>
          <CardInfo>{experience.company}</CardInfo>
          <CardDate>{experience.date}</CardDate>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.docimg} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
