import { Link } from "react-router-dom";
function FavouriteTopic({ topic }) {
  return (
    <Link
      to={`/details/${topic.id}`}
      className="favouriteTopic rounded box-shadow"
    >
      <img
        className="favouriteTopicImg"
        src={`/assets/images/${topic.image}`}
        alt={`${topic.topic}`}
      />
      <div className="favouriteTopicInfo">
        <div>
          <h4 className="favouriteTopicTitle text-overflow">{topic.topic}</h4>
          <div className="stars favouriteTopicStars d-flex align-center">
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star-outline"></ion-icon>
          </div>
        </div>
        {/* <div
          onClick={() => {
            handleRemoveTopic();
          }}
        >
          <ion-icon class="removeIcon" name="heart-dislike-outline"></ion-icon>
        </div> */}
      </div>
    </Link>
  );
}

export default FavouriteTopic;
