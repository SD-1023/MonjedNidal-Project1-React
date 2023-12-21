import "../../../css/favourites.css";
import FavouriteTopic from "./FavouriteTopic";
function FavouritesSection({ favouriteTopics, setFavouriteTopics }) {
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
