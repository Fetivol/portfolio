import React, { useEffect, useMemo, useState } from "react";
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
  ThemeToggle,
} from "./Navbar.styled";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ setDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const theme = useTheme();
  const links = useMemo(
    () => ["About", "Skills", "Experience", "Projects", "Education", "Contact"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.toLowerCase())
      );

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

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
            const id = link.toLowerCase();
            return (
              <NavLink
                href={`#${id.toLowerCase()}`}
                key={id}
                className={activeLink === id ? "active" : ""}
                onClick={() => setActiveLink(id)}
              >
                {link}
              </NavLink>
            );
          })}
        </NavItems>

        <ThemeToggle
          onClick={() => setDarkMode((prevMode) => !prevMode)}
          darkMode={darkMode}
        >
          <span>{darkMode ? <FaMoon /> : <FaSun />}</span>
        </ThemeToggle>

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
              const id = link.toLowerCase();
              return (
                <MobileLink
                  href={`#${id}`}
                  key={id}
                  className={activeLink === id ? "active" : ""}
                  onClick={() => {
                    setActiveLink(id);
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
