import DetailsAside from "../DetailsAside/DetailsAside";
import Stars from "../../GlobalComponents/Stars/Stars";

import {
  StyledInfoSection,
  InfoContainer,
  TopicInfo,
  TopicCategory,
  DetailsLanguage,
  TopicDescription,
} from "./InfoSectionStyles";

function InfoSection({ topicDetails }) {
  return (
    <StyledInfoSection>
      <InfoContainer>
        <TopicInfo>
          <TopicCategory>{topicDetails.category}</TopicCategory>
          <DetailsLanguage>{topicDetails.topic}</DetailsLanguage>
          <Stars rating={topicDetails.rating} />
          <TopicDescription>{topicDetails.description}</TopicDescription>
        </TopicInfo>
        <DetailsAside topicDetails={topicDetails} />
      </InfoContainer>
    </StyledInfoSection>
  );
}

export default InfoSection;
