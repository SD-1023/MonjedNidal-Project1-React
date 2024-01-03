import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../GlobalStyles";

export const FavouritesContainer = styled(Container)`
  position: sticky;
  z-index: 100;
  bottom: 0px;
  margin: 0px;
  color: var(--body-text);
  background-color: var(--bg_default);
  box-shadow: var(--box-shadow);
`;

export const FavouritesTitle = styled.h3`
  margin: 0.4rem 0rem;
`;

export const FavouriteTopicsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 1.5rem;
  padding: 0px;
  padding-bottom: 0.5rem;
`;

export const StyledFavouriteTopic = styled(Link)`
  border: var(--favourite-topic-border);
  list-style-type: none;
  color: var(--body-text);
  text-decoration: none;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const FavouriteTopicImg = styled.img`
  background-color: #ffffff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 69px;
`;

export const FavouriteTopicInfo = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const FavouriteTopicTitle = styled.h4`
  max-width: 6rem;
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
