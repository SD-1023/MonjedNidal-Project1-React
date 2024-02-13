import Stars from "../../../GlobalComponents/Stars/Stars";
import {
  StyledTopicCard,
  TopicCardImage,
  TopicCardBody,
  TopicCategory,
  TopicLanguage,
  TopicAuthor,
  StarsContainer,
} from "../TopicCardStyles";

function TopicCard(props) {
  const { topic } = props;
  return (
    <StyledTopicCard to={`/details/${topic.id}`}>
      <TopicCardImage
        src={`/MonjedNidal-Project1-React/assets/images/${topic.image}`}
        alt={`${topic.topic}`}
      />
      <TopicCardBody>
        <TopicCategory>{topic.category}</TopicCategory>
        <TopicLanguage>{topic.topic}</TopicLanguage>
        <StarsContainer>
          <Stars rating={topic.rating} />
        </StarsContainer>
        <TopicAuthor>Author: {topic.name}</TopicAuthor>
      </TopicCardBody>
    </StyledTopicCard>
  );
}

export default TopicCard;
