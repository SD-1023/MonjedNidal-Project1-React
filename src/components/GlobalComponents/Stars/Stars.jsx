import {
  StarsContainer,
  LowerStarsContainer,
  UpperStarsContainer,
  Star,
} from "./StarsStyles";

function Stars({ rating }) {
  return (
    <StarsContainer>
      <LowerStarsContainer>
        <Star name="star-outline"></Star>
        <Star name="star-outline"></Star>
        <Star name="star-outline"></Star>
        <Star name="star-outline"></Star>
        <Star name="star-outline"></Star>
      </LowerStarsContainer>
      <UpperStarsContainer rating={rating}>
        <Star name="star"></Star>
        <Star name="star"></Star>
        <Star name="star"></Star>
        <Star name="star"></Star>
        <Star name="star"></Star>
      </UpperStarsContainer>
    </StarsContainer>
  );
}

export default Stars;
