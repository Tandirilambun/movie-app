import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailMoviePage from "./pages/DetailMoviePage";
import NavigationBar from "./components/Navbar";
import DetailSeriesPage from "./pages/DetailSeriesPage";
import CollectionPage from "./pages/CollectionPage";
import CreditPage from "./pages/CreditPage";
import PeoplePage from "./pages/PeoplePage";
import MoviePages from "./pages/MoviePage";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<DetailMoviePage />}></Route>
          <Route path="/movie/" element={<MoviePages />}></Route>
          <Route path=":item/:itemId/cast" element={<CreditPage />}></Route>
          <Route
            path="/collection/:collectionId"
            element={<CollectionPage />}
          />
          <Route path="/tv/:seriesId" element={<DetailSeriesPage />} />
          <Route path="/people/:peopleId" element={<PeoplePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
