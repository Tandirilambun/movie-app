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
  const [tabActive, setTabActive] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const popularMovie = useCallback(async () => {
    setTabActive("popular");
    setIsLoading(true);
    try {
      const response = await getPopularMovies();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Popular Movie", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [setTabActive, setPopularMovies]);
  const topRatedMovie = useCallback(async () => {
    setTabActive("top-rated");
    setIsLoading(true);
    try {
      const response = await getTopRatedMovie();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Top Rated Movie", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [setTabActive, setPopularMovies]);
  const upcomingMovie = useCallback(async () => {
    setTabActive("upcoming");
    setIsLoading(true);
    try {
      const response = await getUpcomingMovie();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Upcoming Movie", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [setTabActive, setPopularMovies]);
  const nowPlayingMovie = useCallback(async () => {
    setTabActive("now-playing");
    setIsLoading(true);
    try {
      const response = await getNowPlayingMovie();
      setPopularMovies(response);
    } catch (error) {
      console.log("Error Fetching Now Playing Movie", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
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

  const scrollItemRight = () => {
    const item = document.querySelector(".movie-container");
    item.scroll({
      left: item.scrollLeft + 300,
      behavior: "smooth",
    });
  };
  const scrollItemLeft = () => {
    const item = document.querySelector(".movie-container");
    item.scroll({
      left: item.scrollLeft - 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="movie-container"
      className="bg-cover bg-center ease-in-out duration-500 mx-20 rounded-xl my-20"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularMovies[0]?.backdrop_path})`,
      }}
    >
      <div className="pt-20 backdrop-blur-sm rounded-xl bg-black/80 h-[600px] px-20">
        <div className="px-20 mb-10">
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
        <div className="text-white">
          <button
            onClick={() => scrollItemLeft()}
            className="mx-1 bg-red-950 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollItemRight()}
            className="mx-1 bg-red-950 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="px-5 hidden-scroll bg-transparent snap-x snap-mandatory movie-container">
          {!isLoading ? (
            <div
              className={`${
                isLoading ? "" : "fade-in"
              } flex w-fit min-h-fit gap-x-10 py-5`}
            >
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
                        title={movie.title}
                        rating={movie.vote_average}
                        type={`movie`}
                      ></CardMovie.Image>
                      <CardMovie.Title title={movie.title}></CardMovie.Title>
                      <CardMovie.Footer
                        date_release={movie.release_date}
                      ></CardMovie.Footer>
                    </CardMovie>
                  );
                })
              ) : (
                <p className="text-white text-center">No Movies Found</p>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="home-loader"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
