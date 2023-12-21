import { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../../../App";

function DetailsAside({ topicDetails }) {
  const IMAGE_PATH = `/assets/images/${topicDetails.image}`;

  const { favouriteTopics, setFavouriteTopics, setToggleFavourites } =
    useContext(FavouritesContext);

  const [isTopicFavourited, setIsTopicFavourited] = useState(
    favouriteTopics.some(
      (existingTopic) => existingTopic.topic === topicDetails.topic
    )
  );
  console.log(isTopicFavourited);

  useEffect(() => {
    setIsTopicFavourited(
      favouriteTopics.some(
        (existingTopic) => existingTopic.topic === topicDetails.topic
      )
    );
  }, [favouriteTopics]);
  useEffect(() => {
    setToggleFavourites(isTopicFavourited);
  }, [isTopicFavourited, setToggleFavourites]);

  const saveTopic = (existingFavourites, isFavourated) => {
    setFavouriteTopics(existingFavourites);
    localStorage.setItem("favourites", JSON.stringify(existingFavourites));
    setIsTopicFavourited(isFavourated);
  };

  const handleAddFavouriteTopic = () => {
    let existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    if (isTopicFavourited) {
      // Remove from favorites
      existingFavourites = existingFavourites.filter(
        (item) => item.topic !== topicDetails.topic
      );
      saveTopic(existingFavourites, false);
    } else {
      existingFavourites.push(topicDetails);
      saveTopic(existingFavourites, true);
    }
  };

  return (
    <aside>
      <div className="test box-shadow">
        <img className="topicImg" src={IMAGE_PATH} alt={topicDetails.topic} />
        <div className="asideInfo">
          <p>
            <b className="asideLanguage">{topicDetails.topic}</b> by{" "}
            <a className="devName" href="/">
              {topicDetails.name}
            </a>
          </p>
          <div className="addToFavourites d-flex">
            <p>Interested about this topic?</p>
            <button
              className="addToFavButton d-flex justify-center align-center"
              onClick={handleAddFavouriteTopic}
            >
              {!isTopicFavourited
                ? "Add to Favoutites"
                : "Remove from Favourites"}
              <ion-icon class="icon" name="heart-outline"></ion-icon>
            </button>
            <small className="unlimitedCreds">Unlimited Credits</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DetailsAside;
