import { useContext } from "react";
import { FavouritesContext } from "../Contexts/FavouritesContext";
import ThemeContext from "../Contexts/ThemeContext";
import "../../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { handleToggleFavourites } =
    useContext(FavouritesContext);



  return (
    <>
      <header className="navbar d-flex justify-between align-center container box-shadow">
        <Link to="/" className="navTitle decoration-none">
          Web Topics
        </Link>
        <div className="navList d-flex justify-between">
          <span
            className="navListButton d-flex align-center decoration-none"
            aria-label="theme switch"
            onClick={() => {
              toggleTheme();
            }}
          >
            <ion-icon class="navButtonIcon icon" name="moon-outline"></ion-icon>
            <span className="navButtonText">Dark Mode</span>
          </span>
          <span
            className="navListButton d-flex align-center decoration-none"
            aria-label="show favourite topics"
            onClick={handleToggleFavourites}
          >
            <ion-icon
              class="navButtonIcon icon"
              name="heart-outline"
            ></ion-icon>
            <span className="navButtonText">Favourites</span>
          </span>
        </div>
      </header>
      <section className="top d-flex justify-center">
        <div className="topText container">
          <h2>Welcome to our website!</h2>
          <p className="topP">
            We have a new design that's fresh, modern, and easy to use.
          </p>
        </div>
      </section>
    </>
  );
}

export default Header;
