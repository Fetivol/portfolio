import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { darkTheme } from "../../utils/Themes";
import { education } from "../../data/constants";
import {
  Container,
  Desc,
  TimelineSection,
  Title,
  Wrapper,
} from "../Education/Education.styled";
import EducationCard from "../Cards/EducationCard";

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((school, index) => (
              <TimelineItem key={school.id}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={school} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector
                      style={{ background: darkTheme.primary }}
                    />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
