import React, { useEffect, useRef } from "react";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import {
  Button,
  ButtonGroup,
  Container,
  Date,
  Desc,
  Image,
  Label,
  Member,
  MemberImage,
  MemberName,
  Members,
  Tag,
  Tags,
  Title,
  Wrapper,
} from "./ProjectDetails.styled";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpenModal({ state: false, project: null });
      }
    };

    const handleEscKeyPress = (e) => {
      if (e.key === "Escape") {
        setOpenModal({ state: false, project: null });
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [setOpenModal]);

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper ref={modalRef}>
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
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member, index) => (
                  <Member key={index}>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            <Button href={project?.webapp} target="new">
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
