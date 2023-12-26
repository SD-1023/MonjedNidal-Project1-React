import { createContext, useState } from "react";

export const FavouritesContext = createContext({});

function FavouritesProvider({ children }) {
  const [toggleFavourites, setToggleFavourites] = useState(false);
  const [favouriteTopics, setFavouriteTopics] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const saveTopic = (
    existingFavourites,
    isFavourated,
    setIsTopicFavourited
  ) => {
    setFavouriteTopics(existingFavourites);
    localStorage.setItem("favourites", JSON.stringify(existingFavourites));
    setIsTopicFavourited(isFavourated);
    if (isFavourated || existingFavourites.length === 0) {
      setToggleFavourites(isFavourated);
    }
  };

  const handleFavouritesOperations = (
    topicDetails,
    isTopicFavourited,
    setIsTopicFavourited
  ) => {
    let existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    if (isTopicFavourited) {
      existingFavourites = existingFavourites.filter(
        (item) => item.topic !== topicDetails.topic
      );
      saveTopic(existingFavourites, false, setIsTopicFavourited);
    } else {
      existingFavourites.push(topicDetails);
      saveTopic(existingFavourites, true, setIsTopicFavourited);
    }
  };
  const handleToggleFavourites = () => {
    if (favouriteTopics) {
      setToggleFavourites(!toggleFavourites);
    }
  };
  return (
    <FavouritesContext.Provider
      value={{
        favouriteTopics,
        setFavouriteTopics,
        toggleFavourites,
        setToggleFavourites,
        handleFavouritesOperations,
        handleToggleFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
