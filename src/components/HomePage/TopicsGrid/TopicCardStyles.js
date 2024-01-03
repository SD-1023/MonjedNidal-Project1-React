import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTopicCard = styled(Link)`
  background-color: var(--white);
  color: var(--body-text);
  transition: scale 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  &:hover {
    scale: 1.03;
  }
  @media (max-width: 632px) {
    max-width: 100%;
    :hover {
      scale: 1.01;
    }
  }
`;
export const TopicCardImage = styled.img`
  width: 100%;
  height: 150px;
  background-color: #ffffff;
  @media (max-width: 632px) {
    height: 200px;
  }
`;
export const TopicCardBody = styled.div`
  padding: 1rem 1rem;
  height: 160px;
  display: flex;
  flex-direction: column;
`;
export const TopicCategory = styled.div`
  margin: 0px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TopicLanguage = styled.h3`
  margin: 0rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex-grow: 1;
  font-size: 18px;
`;
export const TopicAuthor = styled.p`
  color: var(--author-color);
  font-size: 14px;
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StarsContainer = styled.div`
  padding: 1.5rem 0rem;
`;
