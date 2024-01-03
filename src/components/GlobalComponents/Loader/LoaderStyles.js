import styled, { keyframes } from "styled-components";

const spin988 = keyframes`
0% {
    transform: scale(1) rotate(0);
  }

  20%,
  25% {
    transform: scale(1.3) rotate(90deg);
  }

  45%,
  50% {
    transform: scale(1) rotate(180deg);
  }

  70%,
  75% {
    transform: scale(1.3) rotate(270deg);
  }

  95%,
  100% {
    transform: scale(1) rotate(360deg);
  }
`;
const Circle = styled.div`
  --color: #333;
  --dim: 1.2rem;
  width: var(--dim);
  height: var(--dim);
  background-color: var(--color);
  border-radius: 50%;
  position: absolute;
`;
export const LoaderContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 200;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLoader = styled.div`
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: ${spin988} 2s linear infinite;
`;
export const FirstCircle = styled(Circle)`
  top: 0;
  left: 0;
`;
export const SecondCircle = styled(Circle)`
  top: 0;
  right: 0;
`;
export const ThirdCircle = styled(Circle)`
  bottom: 0;
  left: 0;
`;
export const FourthCircle = styled(Circle)`
  bottom: 0;
  right: 0;
`;
