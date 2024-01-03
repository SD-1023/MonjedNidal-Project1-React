import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import Button from "../Button";
import {
  Navbar,
  NavTitle,
  NavButtons,
  TopSection,
  TopContent,
  TopContentHeader,
  TopContentParagraph,
} from "./HeaderStyles";
import { useFavourites } from "../../Contexts/FavouritesContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { handleToggleFavourites } = useFavourites();

  return (
    <>
      <Navbar>
        <NavTitle to="/">Web Topics</NavTitle>
        <NavButtons>
          <Button
            onClick={toggleTheme}
            text={"Dark Mode"}
            icon={"moon-outline"}
          />
          <Button
            onClick={handleToggleFavourites}
            text={"Favourites"}
            icon={"heart-outline"}
          />
        </NavButtons>
      </Navbar>
      <TopSection>
        <TopContent>
          <TopContentHeader>Welcome to our website!</TopContentHeader>
          <TopContentParagraph>
            We have a new design that's fresh, modern, and easy to use.
          </TopContentParagraph>
        </TopContent>
      </TopSection>
    </>
  );
}

export default Header;
