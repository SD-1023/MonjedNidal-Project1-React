import styled from "styled-components";

export const SelectContainer = styled.div`
  padding: 0.2rem 0.5rem;
  width: 100%;
  overflow-x: hidden;
  border-right: ${(props) => {
    if (props.noBorder) return "none";
    else return `1px solid var(--grey-border-color)`;
  }};
  @media (max-width: 632px) {
    padding: 0.4rem 0.8rem;
    padding-bottom: 0.7rem;
  }
`;
export const StyledSelect = styled.select`
  border: none;
  width: 100%;
  font-family: var(--primary-font);
  outline: none;
  font-weight: 500;
  font-size: 16px;
  background-color: var(--white);
  color: var(--body-text);
`;
export const SelectLabel = styled.label`
  font-size: 13px;
  padding-left: 4px;
`;
