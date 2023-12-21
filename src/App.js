import { useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./components/Contexts/ThemeContext";
import Header from "./components/GlobalComponents/Header";
import FavouritesSection from "./components/GlobalComponents/Favourites/FavouritesSection";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/GlobalComponents/Footer";
import "./css/constants.css";
import "./css/App.css";
import DetailsPage from "./components/DetailsPage/DetailsPage";

export const FavouritesContext = createContext(null);

function App() {
  const { theme } = useContext(ThemeContext);
  const [toggleFavourites, setToggleFavourites] = useState(false);
  const [favouriteTopics, setFavouriteTopics] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );
  return (
    <BrowserRouter>
      <div
        className={`App d-flex flex-column justify-between ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <FavouritesContext.Provider
          value={{
            favouriteTopics,
            setFavouriteTopics,
            toggleFavourites,
            setToggleFavourites,
          }}
        >
          <div>
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
            </Routes>
          </div>
        </FavouritesContext.Provider>

        <Footer />
        {toggleFavourites && favouriteTopics ? (
          <FavouritesSection
            favouriteTopics={favouriteTopics}
            setFavouriteTopics={setFavouriteTopics}
          />
        ) : (
          ""
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
