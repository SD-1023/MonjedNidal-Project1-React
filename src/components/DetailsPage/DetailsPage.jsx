import { useEffect, useState } from "react";
import InfoSection from "./InfoSection/InfoSection";
import SubTopics from "./SubTopics/SubTopics";
import { useParams } from "react-router-dom";
import { httpRequest } from "../../apiFetches";
import ErrorPage from "../GlobalComponents/ErrorPage";
import Loader from "../GlobalComponents/Loader/Loader";

function DetailsPage() {
  const { id } = useParams();
  const [topicDetails, setTopicDetails] = useState({});
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      await httpRequest(`/details/${id}`).then((data) => {
        setTopicDetails(data);
        setIsLoading(false);
        if (!data) {
          setShowErrorPage(true);
        }
      });
    };
    getDetails();
  }, [id]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : !showErrorPage ? (
        <>
          <InfoSection topicDetails={topicDetails} />
          <SubTopics topicDetails={topicDetails} />
        </>
      ) : (
        <ErrorPage
          errorMsg={"Loading Details Faild!"}
          btnText={"Back to home page"}
          href={"/"}
        />
      )}
    </main>
  );
}

export default DetailsPage;
