import { useCallback, useEffect, useState } from "react";
import { getTrendingAll } from "../services/services.api";
import CategoriesButton from "../components/elements/CategoriesButton";
import CardMovie from "../components/fragments/CardMovie";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [tabTime, setTabTime] = useState("day");
  const [isLoading, setIsLoading] = useState(false);
  const getTrending = useCallback(
    async (time) => {
      setTabTime(time);
      setIsLoading(true);
      try {
        const response = await getTrendingAll(time);
        setTrending(response);
      } catch (error) {
        console.log("Error Fetching Trending Movie", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    },
    [setTrending, setTabTime]
  );
  useEffect(() => {
    getTrending(tabTime);
  }, [getTrending]);
  const handleTabChange = (tab) => {
    if (tab === "day" && tabTime !== "day") {
      getTrending(tab);
    } else if (tab === "week" && tabTime !== "week") {
      getTrending(tab);
    }
  };

  const backdropChanges = (img_path) => {
    const divEle = document.getElementById("trending-container");
    divEle.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${img_path})`;
  };

  const scrollItemRight = () => {
    const item = document.querySelector(".trending-container");
    item.scroll({
      left: item.scrollLeft + 300,
      behavior: "smooth",
    });
  };
  const scrollItemLeft = () => {
    const item = document.querySelector(".trending-container");
    item.scroll({
      left: item.scrollLeft - 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="trending-container"
      className="bg-cover bg-center ease-in-out duration-500 mx-20 rounded-xl my-20"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${trending[0]?.backdrop_path})`,
      }}
    >
      <div className="backdrop-blur-sm rounded-xl pt-20 bg-black/80 h-[600px] px-20">
        <div className="px-20 mb-10">
          <div className="flex items-center">
            <div className="text-4xl font-semibold font-montserrat text-white flex items-center me-20">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="41"
                height="41"
                className="fill-white"
              >
                <title>trending-up</title>
                <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
              </svg>
              <p>Trending</p>
            </div>
            <div className="flex gap-x-10 categories">
              <CategoriesButton
                name="day"
                isActive={`${tabTime === "day" ? "active" : ""}`}
                onclick={() => handleTabChange("day")}
              >
                Today
              </CategoriesButton>
              <CategoriesButton
                name="week"
                isActive={`${tabTime === "week" ? "active" : ""}`}
                onclick={() => handleTabChange("week")}
              >
                Weekly
              </CategoriesButton>
            </div>
          </div>
        </div>
        <div className="text-white">
          <button onClick={() => scrollItemLeft()} className="mx-1 bg-red-950 rounded-full p-2">
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
          <button onClick={() => scrollItemRight()} className="mx-1 bg-red-950 rounded-full p-2">
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
        <div className="px-5 hidden-scroll bg-transparent snap-x snap-mandatory trending-container">
          {!isLoading ? (
            <div
              className={`${
                isLoading ? "" : "fade-in"
              } flex w-fit min-h-fit gap-x-10 py-5`}
            >
              {trending.length > 0 ? (
                trending.map((item) => {
                  return (
                    <CardMovie
                      key={item.id}
                      id={item.id}
                      media_type={item.media_type}
                      onmouseenter={() => backdropChanges(item.backdrop_path)}
                    >
                      <CardMovie.Image
                        poster_path={item.poster_path}
                        title={item.title ? item.title : item.name}
                        rating={item.vote_average}
                        type={item.media_type}
                      ></CardMovie.Image>
                      <CardMovie.Title
                        title={item.title ? item.title : item.name}
                        font_size="text-sm"
                      ></CardMovie.Title>
                      <CardMovie.Footer
                        date_release={
                          item?.release_date
                            ? item.release_date
                            : item.first_air_date
                        }
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

export default Trending;
