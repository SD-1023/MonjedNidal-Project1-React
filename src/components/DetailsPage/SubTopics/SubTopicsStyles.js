import styled from "styled-components";
import { Container } from "../../GlobalComponents/GlobalStyles";
import { InfoSubtopicsContainer } from "../InfoSubtopicsContainer";

export const SubTopicsContainer = styled(Container)`
  color: var(--body-text);
  margin-top: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 1010px) {
    width: 100%;
    display: block;
  }
  @media (min-width: 1010px) {
    padding: 0px;
  }
`;

export const StyledSubTopics = styled(InfoSubtopicsContainer)`
  position: relative;
  background-color: var(--bg_default);
  border: 1px solid var(--grey-border-color);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  padding: 0px;
  @media (min-width: 1010px) {
    width: 100%;
  }
  @media (max-width: 1010px) {
    position: static;
    width: unset;
  }
`;
export const SubTopicsTitle = styled.h2`
  margin: 0px;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--grey-border-color);
`;
export const SubTopicsList = styled.ul`
  margin: 0px;
  list-style-type: none;
  padding-left: 0rem;
`;
