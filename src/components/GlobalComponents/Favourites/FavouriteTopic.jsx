import {
  StyledFavouriteTopic,
  FavouriteTopicImg,
  FavouriteTopicInfo,
  FavouriteTopicTitle,
} from "./FavouritesStyles";
import Stars from "../Stars/Stars";

function FavouriteTopic({ topic }) {
  return (
    <StyledFavouriteTopic to={`/details/${topic.id}`}>
      <FavouriteTopicImg
        className="favouriteTopicImg"
        src={`/assets/images/${topic.image}`}
        alt={`${topic.topic}`}
      />
      <FavouriteTopicInfo>
        <FavouriteTopicTitle className="text-overflow">
          {topic.topic}
        </FavouriteTopicTitle>
        <Stars rating={topic.rating} />
      </FavouriteTopicInfo>
    </StyledFavouriteTopic>
  );
}

export default FavouriteTopic;
