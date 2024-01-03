import styled from "styled-components";
import { InfoSubtopicsContainer } from "../InfoSubtopicsContainer";

export const StyledInfoSection = styled.section`
  position: relative;
  width: 100%;
  background-color: #333333;
  color: #ffffff;
  padding: 1.5rem 0rem;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const InfoContainer = styled(InfoSubtopicsContainer)`
  position: relative;
  display: flex;

  @media (min-width: 1010px) {
    padding: 0px;
  }
  @media (max-width: 770px) {
    width: 100%;
  }
  @media (max-width: 632px) {
    flex-direction: column;
  }
`;

export const TopicInfo = styled.div`
  @media (max-width: 1010px) {
    width: 100%;
  }
`;

export const TopicCategory = styled.span`
  color: var(--brand-secondary);
  font-size: 17px;
`;

export const DetailsLanguage = styled.h2`
  margin: 0px;
`;

export const TopicDescription = styled.p`
  font-size: 17px;
  margin-bottom: 0px;
  @media (max-width: 770px) {
    font-size: 16px;
  }
  @media (max-width: 632px) {
    margin-bottom: 1rem;
  }
`;
