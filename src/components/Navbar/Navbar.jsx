import React, { useState } from "react";
import {
  ButtonContainer,
  GithubButton,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavContainer,
  NavItems,
  NavLink,
  NavLogo,
  Span,
} from "./Navbar.styled";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <Nav>
      <NavContainer>
        <NavLogo
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Fetivol</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          {links.map((link) => {
            return <NavLink href={`#${link.toLowerCase()}`}>{link}</NavLink>;
          })}
        </NavItems>
        <ButtonContainer>
          <GithubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </GithubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {links.map((link) => {
              return (
                <MobileLink
                  href={`#${link.toLowerCase()}`}
                  key={link}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {link}
                </MobileLink>
              );
            })}
            <GithubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
