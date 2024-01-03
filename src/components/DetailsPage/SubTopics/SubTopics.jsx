import SubTopic from "./SubTopic";
import {
  SubTopicsContainer,
  StyledSubTopics,
  SubTopicsTitle,
  SubTopicsList,
} from "./SubTopicsStyles";
function SubTopics({ topicDetails, leftSpace, width }) {
  return (
    <SubTopicsContainer>
      <StyledSubTopics>
        <SubTopicsTitle>{topicDetails.topic} Sub Topics</SubTopicsTitle>
        <SubTopicsList>
          {(function renderSubTopics() {
            const subTopics = [];
            for (let sub in topicDetails.subtopics) {
              subTopics.push(
                <SubTopic
                  key={topicDetails.subtopics[sub]}
                  subtopic={topicDetails.subtopics[sub]}
                />
              );
            }
            return subTopics;
          })()}
        </SubTopicsList>
      </StyledSubTopics>
    </SubTopicsContainer>
  );
}

export default SubTopics;
