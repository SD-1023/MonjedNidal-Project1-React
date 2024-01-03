import { useState, useEffect } from "react";
import { SearchFilterProvider } from "../Contexts/SearchFilterContext";
import { httpRequest } from "../../apiFetches";
import FormSection from "./FormSection/FormSection";
import TopicsContainer from "./TopicsGrid/TopicsContainer";
import ErrorPage from "../GlobalComponents/ErrorPage";
import Loader from "../GlobalComponents/Loader/Loader";

function HomePage() {
  const [topicsData, setTopicsData] = useState([]);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTopicsData = () => {
      const data = httpRequest("/list");
      setIsLoading(false);
      return data;
    };
    getTopicsData().then((data) => {
      if (data) {
        setTopicsData(data);
      } else {
        setShowErrorPage(true);
      }
    });
  }, []);
  return (
    <SearchFilterProvider>
      {isLoading ? (
        <Loader />
      ) : !showErrorPage ? (
        <main>
          <FormSection topicsData={topicsData} />
          <TopicsContainer
            topicsData={topicsData}
            setTopicsData={setTopicsData}
          />
        </main>
      ) : (
        <ErrorPage
          errorMsg="Something went wrong. Web topics failed to load."
          btnText="Reload Page"
          href="/"
        />
      )}
    </SearchFilterProvider>
  );
}

export default HomePage;
