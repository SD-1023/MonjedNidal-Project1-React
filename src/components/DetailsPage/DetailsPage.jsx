import { useEffect, useState } from "react";
import "../../css/details.css";
import "../../css/detailsMediaQueries.css";
import InfoSection from "./InfoSection";
import SubTopics from "./SubTopics/SubTopics";
import { useParams } from "react-router-dom";
import { httpRequest } from "../../apiFetches";

function DetailsPage() {
  const { id } = useParams();
  const [topicDetails, setTopicDetails] = useState({});
  const [leftSpace, setLeftSpace] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setLeftSpace(leftSpace);
  }, [leftSpace]);

  useEffect(() => {
    setWidth(width);
  }, [width]);

  useEffect(() => {
    const getDetails = async () => {
      await httpRequest(`/details/${id}`).then((data) => {
        setTopicDetails(data);
      });
    };
    getDetails();
  }, [id]);

  return (
    <main className="detailsContainer align-center" id="detailsContainer">
      {topicDetails ? (
        <>
          <InfoSection
            topicDetails={topicDetails}
            setLeftSpace={setLeftSpace}
            setWidth={setWidth}
          />
          <SubTopics
            topicDetails={topicDetails}
            leftSpace={leftSpace}
            width={width}
          />
        </>
      ) : (
        ""
      )}
    </main>
  );
}

export default DetailsPage;
