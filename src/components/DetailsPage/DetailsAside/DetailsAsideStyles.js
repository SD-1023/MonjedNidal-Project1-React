import styled from "styled-components";

export const AsideContainer = styled.div`
  position: relative;
  /* left: 100%; */
  @media (max-width: 1010px) {
    width: unset;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  position: absolute;
  color: #333333;
  background-color: var(--white-static);
  height: fit-content;
  border: 2px solid #ffffff;
  z-index: 10;
  box-shadow: var(--box-shadow);
  margin-left: 1.5rem;

  @media (max-width: 1024px) {
    position: static;
  }
  @media (max-width: 632px) {
    margin: 0px;
  }
`;

export const AsideImage = styled.img`
  width: 300px;
  height: 170px;
  @media (max-width: 632px) {
    width: 100%;
    height: 250px;
  }
`;

export const AsideInfo = styled.div`
  padding: 0.5rem 1rem;
  padding-bottom: 1rem;
  color: var(--dark-lines-color);
`;

export const AsideInfoHeader = styled.p`
  margin-block: 0.6rem;

  .devName {
    color: var(--brand-primary);
  }
`;

export const AddToFavouritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  border: 1px solid var(--grey-border-color-static);
`;

export const AddToFavButton = styled.button`
  font-family: var(--primary-font);
  font-size: 19px;
  color: var(--white-static);
  background-color: var(--brand-secondary);
  padding: 0.7rem 1rem;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: var(--box-shadow);
    background-color: #06b276;
  }
`;

export const HeartIcon = styled("ion-icon")`
  font-size: 30px;
  padding: 0rem 0.5rem;
`;
export const UnlimitedCreds = styled.small`
  margin-top: 0.6rem;
  margin-bottom: 0.1rem;
  text-align: center;
  color: var(--grey);
`;
