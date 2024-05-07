import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import NavigationBar from "./components/Navbar";
import DetailSeriesPage from "./pages/DetailSeriesPage";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>
//   },
//   {
//     path: "/movie/:movieId",
//     element: <DetailMoviePage/>
//   },
//   {
//     path: "/tv/:seriesId",
//     element: <DetailSeriesPage/>
//   },
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={routes} /> */}
    <App />
  </React.StrictMode>
);
