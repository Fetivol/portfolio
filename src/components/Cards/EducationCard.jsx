import React from "react";
import {
  Body,
  CardName,
  CardInfo,
  CardDate,
  Card,
  Description,
  Image,
  Span,
  Top,
  Grade,
  Document,
} from "./Cards.styled";

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <CardName>{education.school}</CardName>
          <CardInfo>{education.degree}</CardInfo>
          <CardDate>{education.date}</CardDate>
        </Body>
      </Top>
      {education.grade && (
        <Grade>
          <b>Grade: </b>
          {education.grade}
        </Grade>
      )}
      <Description>
        <Span>{education.desc}</Span>
        {education.doc && (
          <a href={education.doc} target="new">
            <Document src={education.docimg} />
          </a>
        )}
      </Description>
    </Card>
  );
};

export default EducationCard;
