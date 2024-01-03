import styled from "styled-components";

export const StarsContainer = styled.div`
  position: relative;
`;
export const LowerStarsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UpperStarsContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  inset: 0;
  max-width: fit-content;
  clip-path: ${({ rating }) => {
    const persentage = (rating / 5) * 100;
    return `polygon(0 0, ${persentage}% 0, ${persentage}% 100%, 0% 100%);`;
  }};
`;

export const Star = styled("ion-icon")`
  color: #f4a942;
  width: 1rem;
`;
