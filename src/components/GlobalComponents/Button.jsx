import styled from "styled-components";

const StyledButton = styled.span`
  color: var(--body-text);
  border: 2px solid var(--grey-border-color);
  padding: 5px 7px;
  border-radius: 5px;
  margin-left: 0.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
const ButtonIcon = styled("ion-icon")`
  color: var(--body-text);
  --ionicon-stroke-width: 40px;
`;
const Text = styled.span`
  margin-left: 5px;

  @media (max-width: 632px) {
    display: none;
  }
`;

function Button({ onClick, text, icon }) {
  return (
    <StyledButton onClick={onClick}>
      {icon && <ButtonIcon name={icon}></ButtonIcon>}
      <Text>{text}</Text>
    </StyledButton>
  );
}

export default Button;
