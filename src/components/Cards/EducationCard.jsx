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
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
