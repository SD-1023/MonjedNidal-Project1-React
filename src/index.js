import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/Contexts/ThemeContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
