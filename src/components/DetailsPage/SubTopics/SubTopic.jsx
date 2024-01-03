import styled from "styled-components";

const StyledSubTopic = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 17px;
  border-bottom: 1px solid var(--grey-border-color);

  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 1010px) {
    padding: 0.8rem 2rem;
  }
  @media (max-width: 632px) {
    padding: 0.8rem 1.2rem;
  }
`;

const CheckmarkIcon = styled("ion-icon")`
  color: var(--brand-secondary);
  font-size: 23px;
  padding-right: 1rem;
  flex-shrink: 0;
`;

function SubTopic({ subtopic }) {
  return (
    <StyledSubTopic>
      <CheckmarkIcon name="checkmark-circle-outline"></CheckmarkIcon>
      {subtopic}
    </StyledSubTopic>
  );
}

export default SubTopic;
