import { ThemeProvider } from "./components/Contexts/ThemeContext";
import FavouritesProvider from "./components/Contexts/FavouritesContext";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <ThemeProvider>
      <FavouritesProvider>
        <MainContainer />
      </FavouritesProvider>
    </ThemeProvider>
  );
}

export default App;
