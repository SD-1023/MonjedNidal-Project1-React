import { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../../Contexts/FavouritesContext";

function DetailsAside({ topicDetails }) {
  const IMAGE_PATH = `/assets/images/${topicDetails.image}`;

  const { favouriteTopics, handleFavouritesOperations } =
    useContext(FavouritesContext);

  const [isTopicFavourited, setIsTopicFavourited] = useState(
    favouriteTopics.some(
      (existingTopic) => existingTopic.topic === topicDetails.topic
    )
  );

  useEffect(() => {
    setIsTopicFavourited(
      favouriteTopics.some(
        (existingTopic) => existingTopic.topic === topicDetails.topic
      )
    );
  }, [favouriteTopics, topicDetails.topic]);

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
              onClick={() => {
                handleFavouritesOperations(
                  topicDetails,
                  isTopicFavourited,
                  setIsTopicFavourited
                );
              }}
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
