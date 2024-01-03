import styled from "styled-components";

export const SearchBar = styled.div`
  width: 70%;
  padding-left: 2.3rem;
  display: flex;
  justify-content: center;
  @media (max-width: 632px) {
    width: 100%;
    border-bottom: 1px solid var(--grey-border-color);
  }
`;
export const SearchIcon = styled("ion-icon")`
  font-size: 20px;
  position: absolute;
  align-self: center;
  left: 11px;
  color: var(--body-text);
`;
export const StyledInputField = styled.input`
  width: 100%;
  font-size: 16px;
  font-family: var(--primary-font);
  outline: none;
  border: 1px solid var(--grey-border-color);
  border-top: none;
  border-bottom: none;
  border-left: none;
  background-color: var(--white);
  color: var(--body-text);

  @media (max-width: 632px) {
    width: 100%;
    height: 3rem;
    border-top-right-radius: 10px;
    border: none;
  }
`;
