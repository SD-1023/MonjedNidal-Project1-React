import { useEffect, useState } from "react";
import { useFavourites } from "../../Contexts/FavouritesContext";
import {
  AsideContainer,
  Aside,
  AsideImage,
  AsideInfo,
  AsideInfoHeader,
  AddToFavouritesContainer,
  AddToFavButton,
  HeartIcon,
  UnlimitedCreds,
} from "./DetailsAsideStyles";
function DetailsAside({ topicDetails }) {
  const IMAGE_PATH = `/assets/images/${topicDetails.image}`;
  const { isFavouratedTopic, addToFavourates, removeFromFavourates } =
    useFavourites();
  const [isFavourated, setIsFavourated] = useState(
    isFavouratedTopic(topicDetails.id)
  );

  useEffect(() => {
    setIsFavourated(isFavouratedTopic(topicDetails.id));
  }, [isFavouratedTopic, topicDetails.id]);

  const handleAddToFavourates = () => {
    if (!isFavourated) {
      addToFavourates(topicDetails);
    } else {
      removeFromFavourates(topicDetails.id);
    }
  };

  return (
    <AsideContainer>
      <Aside>
        <AsideImage src={IMAGE_PATH} alt={topicDetails.topic} />
        <AsideInfo>
          <AsideInfoHeader>
            <b>{topicDetails.topic}</b> by{" "}
            <a className="devName" href="/">
              {topicDetails.name}
            </a>
          </AsideInfoHeader>
          <AddToFavouritesContainer>
            <p>Interested about this topic?</p>
            <AddToFavButton onClick={handleAddToFavourates}>
              {!isFavourated ? "Add to Favourites" : "Remove from Favourites"}
              <HeartIcon name="heart-outline"></HeartIcon>
            </AddToFavButton>
            <UnlimitedCreds>Unlimited Credits</UnlimitedCreds>
          </AddToFavouritesContainer>
        </AsideInfo>
      </Aside>
    </AsideContainer>
  );
}

export default DetailsAside;
