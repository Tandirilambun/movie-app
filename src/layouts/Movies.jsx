import CardMovie from "../components/fragments/CardMovie";
import { useCallback, useEffect, useState } from "react";
import {
  getPopularMovies,
  getUpcomingMovie,
  getTopRatedMovie,
  getNowPlayingMovie,
} from "../services/services.api";
import CategoriesButton from "../components/elements/CategoriesButton";
const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [tabActive, setTabActive] = useState("popular");
  // const [trendingTime, setTrendingTime] = useState("day");
  const popularMovie = useCallback(async () => {
    setTabActive("popular");
    try {
      const response = await getPopularMovies();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Popular Movie", error);
    }
  }, [setTabActive, setPopularMovies]);
  const topRatedMovie = useCallback(async () => {
    setTabActive("top-rated");
    try {
      const response = await getTopRatedMovie();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Top Rated Movie", error);
    }
  }, [setTabActive, setPopularMovies]);
  const upcomingMovie = useCallback(async () => {
    setTabActive("upcoming");
    try {
      const response = await getUpcomingMovie();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Upcoming Movie", error);
    }
  }, [setTabActive, setPopularMovies]);
  const nowPlayingMovie = useCallback(async () => {
    setTabActive("now-playing");
    try {
      const response = await getNowPlayingMovie();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Now Playing Movie", error);
    }
  }, [setTabActive, setPopularMovies]);
  useEffect(() => {
    nowPlayingMovie();
  }, [nowPlayingMovie]);

  const handleTabChange = (tab) => {
    if (tab === "popular" && tabActive !== "popular") {
      popularMovie();
    } else if (tab === "now-playing" && tabActive !== "now-playing") {
      nowPlayingMovie();
    } else if (tab === "top-rated" && tabActive !== "top-rated") {
      topRatedMovie();
    } else if (tab === "upcoming" && tabActive !== "upcoming") {
      upcomingMovie();
    }
  };

  const backdropChanges = useCallback((img_path) => {
    const divEle = document.getElementById("movie-container");
    divEle.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${img_path})`;
  });

  return (
    <section
      id="movie-container"
      className="bg-cover bg-center ease-in-out duration-500 mx-20 rounded-xl my-20"
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularMovies[0]?.backdrop_path})`}}
    >
      <div className=" pt-20 backdrop-blur-3xl rounded-xl bg-[#191919]/30">
        <div className="px-40 mb-10">
          <div className="flex items-center">
            <div className="flex items-center text-4xl font-semibold font-montserrat text-white me-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                className="fill-white"
              >
                <title>movie-open</title>
                <path d="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18M13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54M9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05L9.07 4.5M4.16 5.5L3.18 5.69A2 2 0 0 0 1.61 8.04L2 10L6.9 9.03L4.16 5.5M2 10V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V10H2Z" />
              </svg>
              <p>Movies</p>
            </div>
            <div className="flex gap-x-10 categories">
              <CategoriesButton
                name="now-playing"
                isActive={`${tabActive === "now-playing" ? "active" : ""}`}
                onclick={() => handleTabChange("now-playing")}
              >
                Now Playing
              </CategoriesButton>
              <CategoriesButton
                name="popular"
                isActive={`${tabActive === "popular" ? "active" : ""}`}
                onclick={() => handleTabChange("popular")}
              >
                Popular
              </CategoriesButton>
              <CategoriesButton
                name="top-rated"
                isActive={`${tabActive === "top-rated" ? "active" : ""}`}
                onclick={() => handleTabChange("top-rated")}
              >
                Top Rated
              </CategoriesButton>
              <CategoriesButton
                name="upcoming"
                isActive={`${tabActive === "upcoming" ? "active" : ""}`}
                onclick={() => handleTabChange("upcoming")}
              >
                Upcoming
              </CategoriesButton>
            </div>
          </div>
        </div>
        <div className="px-5 hidden-scroll bg-transparent mx-20">
          <div className="flex w-fit min-h-fit gap-x-10 py-5">
            {popularMovies.length > 0 ? (
              popularMovies.map((movie) => {
                return (
                  <CardMovie
                    key={movie.id}
                    id={movie.id}
                    media_type="movie"
                    onmouseenter={() => backdropChanges(movie.backdrop_path)}
                  >
                    <CardMovie.Image
                      poster_path={movie.poster_path}
                      title={movie.title ? movie.title : movie.name}
                    ></CardMovie.Image>
                    <CardMovie.Title
                      title={movie.title ? movie.title : movie.name}
                    ></CardMovie.Title>
                    <CardMovie.Footer
                      rating={movie.vote_average}
                      date_release={movie.release_date}
                    ></CardMovie.Footer>
                  </CardMovie>
                );
              })
            ) : (
              <p className="text-white text-center">No Movies Found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
