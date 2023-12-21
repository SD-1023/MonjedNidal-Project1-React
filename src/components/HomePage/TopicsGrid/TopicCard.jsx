import { Link } from "react-router-dom";

function TopicCard(props) {
  const { topic } = props;
  return (
    <Link
      to={`/details/${topic.id}`}
      className="topic decoration-none box-shadow rounded"
    >
      <img src={`/assets/images/${topic.image}`} alt={`${topic.topic}`} />
      <div className="topicInformation d-flex justify-between">
        <div>
          <p className="topicTitle text-overflow">{topic.category}</p>
          <p className="language">{topic.topic}</p>
        </div>
        <div>
          <div className="stars d-flex align-center">
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star-outline"></ion-icon>
          </div>
          <p className="author text-overflow">Author: {topic.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default TopicCard;
