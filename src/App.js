import React from "react";
import "./App.css";
import AllCountries from "./pages/MainPage/AllCountries";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectedCountry from "./pages/DetailedPage/SelectedCountry";
import ThemeProvider from "./Context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/Week5-flags-app-react-Harri"
            element={<AllCountries />}
          />
          <Route
            path="/Week5-flags-app-react-Harri/SelectedCountry"
            element={<SelectedCountry />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
