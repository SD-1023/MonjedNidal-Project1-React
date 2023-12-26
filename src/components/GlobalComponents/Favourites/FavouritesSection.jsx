import "../../../css/favourites.css";
import FavouriteTopic from "./FavouriteTopic";
import { useContext } from "react";
import { FavouritesContext } from "../../Contexts/FavouritesContext";
function FavouritesSection() {
  const { favouriteTopics, setFavouriteTopics } = useContext(FavouritesContext);
  return (
    <section className="favouritesSection container box-shadow">
      <h3 className="favouritesTitle">My Favourite Topics</h3>
      <ul className="favouriteTopicsList">
        {favouriteTopics.map((topic) => (
          <FavouriteTopic topic={topic} key={topic.id} />
        ))}
      </ul>
    </section>
  );
}

export default FavouritesSection;
