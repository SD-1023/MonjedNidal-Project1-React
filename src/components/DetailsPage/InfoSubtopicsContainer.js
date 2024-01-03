import styled from "styled-components";
import { Container } from "../GlobalComponents/GlobalStyles";

export const InfoSubtopicsContainer = styled(Container)`
  max-width: 640px;
  margin-right: 300px;

  @media (max-width: 1024px) {
    max-width: 1024px;
    margin-right: unset;
  }
`;
