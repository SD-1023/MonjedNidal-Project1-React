import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../Hooks/LocalStorage";
const FavouritesContext = createContext({});

export function FavouritesProvider({ children }) {
  const { setItem, getItem } = useLocalStorage();
  const [toggleFavourites, setToggleFavourites] = useState(false);
  const [favouriteTopics, setFavouriteTopics] = useState(
    getItem("favourites") || []
  );

  const isFavouratedTopic = (id) => {
    return favouriteTopics.findIndex((topic) => topic.id === id) > -1;
  };

  const addToFavourates = (topic) => {
    if (!isFavouratedTopic(topic.id)) {
      const existingTopics = [...favouriteTopics, topic];
      setFavouriteTopics(existingTopics);
      setItem("favourites", existingTopics);
      setToggleFavourites(true);
    }
  };

  const removeFromFavourates = (id) => {
    const existingTopics = favouriteTopics.filter((topic) => topic.id !== id);
    setFavouriteTopics(existingTopics);
    setItem("favourites", existingTopics);
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
        toggleFavourites,
        handleToggleFavourites,
        isFavouratedTopic,
        removeFromFavourates,
        addToFavourates,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

// const saveTopic = (
//   existingFavourites,
//   isFavourated,
//   setIsTopicFavourited
// ) => {
//   setFavouriteTopics(existingFavourites);
//   localStorage.setItem("favourites", JSON.stringify(existingFavourites));
//   setIsTopicFavourited(isFavourated);
//   if (isFavourated || existingFavourites.length === 0) {
//     setToggleFavourites(isFavourated);
//   }
// };

// const handleFavouritesOperations = (
//   topicDetails,
//   isTopicFavourited,
//   setIsTopicFavourited
// ) => {
//   let existingFavourites =
//     JSON.parse(localStorage.getItem("favourites")) || [];

//   if (isTopicFavourited) {
//     existingFavourites = existingFavourites.filter(
//       (item) => item.topic !== topicDetails.topic
//     );
//     saveTopic(existingFavourites, false, setIsTopicFavourited);
//   } else {
//     existingFavourites.push(topicDetails);
//     saveTopic(existingFavourites, true, setIsTopicFavourited);
//   }
// };
