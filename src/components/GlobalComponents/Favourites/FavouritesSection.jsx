import FavouriteTopic from "./FavouriteTopic";
import { useFavourites } from "../../Contexts/FavouritesContext";
import {
  FavouritesContainer,
  FavouritesTitle,
  FavouriteTopicsList,
} from "./FavouritesStyles";

function FavouritesSection() {
  const { favouriteTopics } = useFavourites();
  return (
    <FavouritesContainer className="box-shadow">
      <FavouritesTitle>
        {favouriteTopics.length
          ? "My Favourite Topics"
          : "No Favourite Topics Yet!"}
      </FavouritesTitle>
      <FavouriteTopicsList>
        {favouriteTopics.map((topic) => (
          <FavouriteTopic topic={topic} key={topic.id} />
        ))}
      </FavouriteTopicsList>
    </FavouritesContainer>
  );
}

export default FavouritesSection;
