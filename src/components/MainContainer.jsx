import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./Contexts/ThemeContext";
import { FavouritesContext } from "./Contexts/FavouritesContext";
import Header from "./GlobalComponents/Header";
import FavouritesSection from "./GlobalComponents/Favourites/FavouritesSection";
import HomePage from "./HomePage/HomePage";
import Footer from "./GlobalComponents/Footer";
import "../css/constants.css";
import "../css/App.css";
import DetailsPage from "./DetailsPage/DetailsPage";

function MainContainer() {
  const { theme } = useContext(ThemeContext);
  const { toggleFavourites, favouriteTopics } = useContext(FavouritesContext);

  return (
    <BrowserRouter>
      <div
        className={`App d-flex flex-column justify-between ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>

        <Footer />
        {toggleFavourites && favouriteTopics ? <FavouritesSection /> : ""}
      </div>
    </BrowserRouter>
  );
}

export default MainContainer;
