import {
  LoaderContainer,
  StyledLoader,
  FirstCircle,
  SecondCircle,
  ThirdCircle,
  FourthCircle,
} from "./LoaderStyles";
function Loader() {
  return (
    <LoaderContainer>
      <StyledLoader>
        <FirstCircle></FirstCircle>
        <SecondCircle></SecondCircle>
        <ThirdCircle></ThirdCircle>
        <FourthCircle></FourthCircle>
      </StyledLoader>
    </LoaderContainer>
  );
}

export default Loader;
