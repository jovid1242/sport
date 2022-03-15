import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Match from "./pages/match";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Match />} />
        <Route path="/match" element={<Match />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
