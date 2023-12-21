function FavouriteTopic({ topic }) {
  return (
    <li className="favouriteTopic rounded box-shadow">
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
        <ion-icon class="removeIcon" name="heart-dislike-outline"></ion-icon>
      </div>
    </li>
  );
}

export default FavouriteTopic;
