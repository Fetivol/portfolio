import React from "react";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import {
  Container,
  Date,
  Image,
  Tag,
  Tags,
  Title,
  Wrapper,
} from "./ProjectDetails.styled";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          {project.tags?.length > 0 && (
            <Tags>
              {project.tags.map((item, index) => (
                <Tag key={`${item}-${index}`}>{item}</Tag>
              ))}
            </Tags>
          )}
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
