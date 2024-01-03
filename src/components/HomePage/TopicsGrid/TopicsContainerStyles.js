import styled from "styled-components";
import { Container } from "../../GlobalComponents/GlobalStyles";

export const TopicsTitle = styled(Container)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--body-text);
  margin-block: 1rem 1.5rem;
`;
export const TopicsGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
`;
