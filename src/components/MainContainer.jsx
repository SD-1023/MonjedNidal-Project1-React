import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./Contexts/ThemeContext";
import { useFavourites } from "./Contexts/FavouritesContext";
import Header from "./GlobalComponents/Header/Header";
import FavouritesSection from "./GlobalComponents/Favourites/FavouritesSection";
import HomePage from "./HomePage/HomePage";
import Footer from "./GlobalComponents/Footer";
import DetailsPage from "./DetailsPage/DetailsPage";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--bg_body);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function MainContainer() {
  const { theme } = useContext(ThemeContext);
  const { toggleFavourites } = useFavourites();

  return (
    <BrowserRouter basename="/MonjedNidal-Project1-React/">
      <StyledMainContainer className={`${theme === "dark" ? "dark" : ""}`}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>
        <Footer />
        {toggleFavourites ? <FavouritesSection /> : ""}
      </StyledMainContainer>
    </BrowserRouter>
  );
}

export default MainContainer;
