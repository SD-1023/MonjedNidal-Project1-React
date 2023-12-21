import SubTopic from "./SubTopic";
function SubTopics({ topicDetails, leftSpace, width }) {
  return (
    <section
      className={`subTopicsContainer ${
        window.innerWidth <= 1010 ? "container" : ""
      }`}
      style={{
        left: leftSpace + "px",
        width: window.innerWidth <= 1010 ? "unset" : width + "px",
        position: window.innerWidth <= 1010 ? "static" : "",
      }}
    >
      <div className="subTopics box-shadow rounded">
        <h2 className="subTopicsTitle">
          <span className="subTopicsTitleLanguage">{topicDetails.topic}</span>{" "}
          Sub Topics
        </h2>
        <ul className="subTopicsList">
          {(function renderSubTopics() {
            const subTopics = [];
            for (let sub in topicDetails.subtopics) {
              subTopics.push(
                <SubTopic subtopic={topicDetails.subtopics[sub]} />
              );
            }
            return subTopics;
          })()}
        </ul>
      </div>
    </section>
  );
}

export default SubTopics;
