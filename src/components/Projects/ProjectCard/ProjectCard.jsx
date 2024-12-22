import React from "react";
import {
  Avatar,
  Card,
  Date,
  Description,
  Details,
  Image,
  ImageItem,
  Members,
  Tag,
  Tags,
  Title,
} from "./ProjectCard.styled";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card
      onClick={(e) => {
        e.stopPropagation(); // Prevent propagation
        setOpenModal({ state: true, project: project });
      }}
    >
      <Image src={project.image} alt={project.title} />
      {project.tags?.length > 0 && (
        <Tags>
          {project.tags.map((item, index) => (
            <Tag key={`${item}-${index}`}>{item}</Tag>
          ))}
        </Tags>
      )}
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {project.member?.length > 0 && (
        <Members>
          {project.member.map((item, index) => (
            <ImageItem key={index}>
              <Avatar src={item.img} alt={item.name} />
            </ImageItem>
          ))}
        </Members>
      )}
    </Card>
  );
};

export default ProjectCard;
