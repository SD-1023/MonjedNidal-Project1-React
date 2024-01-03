import styled from "styled-components";

const ErrorPageContainer = styled.main`
  text-align: center;
`;
const ErrorMessage = styled.p`
  color: var(--body-text);
  color: var(--heart-color);
  font-size: 23px;
  font-weight: 700;
  padding: 2rem;
`;
const BackButton = styled.a`
  background-color: var(--bg_default);
  padding: 0.5rem 1rem;
  font-size: 18px;
  text-decoration: none;
  color: var(--body-text);
  border-radius: 10px;
  font-weight: 700;
  box-shadow: var(--box-shadow);
`;
function ErrorPage(props) {
  const { errorMsg, btnText, href } = props;
  return (
    <ErrorPageContainer>
      <ErrorMessage>{errorMsg}</ErrorMessage>
      <BackButton href={href}>{btnText}</BackButton>
    </ErrorPageContainer>
  );
}

export default ErrorPage;
