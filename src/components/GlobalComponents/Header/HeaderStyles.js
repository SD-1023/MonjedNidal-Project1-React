import styled from "styled-components";
import { Container } from "../GlobalStyles";
import { Link } from "react-router-dom";

export const Navbar = styled(Container)`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow);
`;
export const NavTitle = styled(Link)`
  color: var(--brand-primary);
  font-size: 18px;
  margin: 1rem 0rem 1rem 0rem;
  text-decoration: none;
`;
export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TopSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 10rem;
  background-image: url("/MonjedNidal-Project1-React/assets/desktop-top-background.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: var(--white);
  @media (min-width: 1700px) {
    background-size: cover;
  }
  @media (max-width: 720px) {
    background-image: url("/MonjedNidal-Project1-React/assets/mobile-top-background.svg");
  }
  @media (max-width: 632px) {
    height: 8rem;
    text-align: center;
  }
`;
export const TopContent = styled(Container)`
  align-self: center;
  margin-top: 4rem;

  @media (max-width: 632px) {
    margin-top: 2rem;
  }
`;
export const TopContentHeader = styled.h2`
  margin: 0px;
  color: var(--brand-secondary);

  @media (max-width: 632px) {
    font-size: 20px;
  }
`;
export const TopContentParagraph = styled.p`
  margin: 0px;
  font-size: 18px;
  color: var(--top-paragraph-color);

  @media (max-width: 632px) {
    font-size: 15px;
  }
`;
