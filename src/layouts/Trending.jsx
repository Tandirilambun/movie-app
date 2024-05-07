import { useCallback, useEffect, useState } from "react";
import { getTrendingAll } from "../services/services.api";
import CategoriesButton from "../components/elements/CategoriesButton";
import CardMovie from "../components/fragments/CardMovie";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [tabTime, setTabTime] = useState("day");
  const getTrending = useCallback(
    async (time) => {
      setTabTime(time);
      try {
        const response = await getTrendingAll(time);
        setTrending(response);
      } catch (error) {
        console.log("Error Fetching Trending Movie", error);
      }
    },
    [setTrending, setTabTime]
  );
  useEffect(() => {
    getTrending(tabTime);
    // backdropChanges(trending[0]?.backdrop_path);
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

  return (
    <section
      id="trending-container"
      className="bg-cover bg-center ease-in-out duration-500 mx-20 rounded-xl my-20"
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${trending[0]?.backdrop_path})`}}
    >
      <div className="backdrop-blur-xl rounded-xl pt-20 bg-[#191919]/30">
        <div className="px-40 mb-10">
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
        <div className="px-5 mx-20 hidden-scroll bg-transparent">
          <div className="flex w-fit min-h-fit gap-x-10 py-5">
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
                    ></CardMovie.Image>
                    <CardMovie.Title
                      title={item.title ? item.title : item.name}
                    ></CardMovie.Title>
                    <CardMovie.Type type={item.media_type}></CardMovie.Type>
                    <CardMovie.Footer
                      rating={item.vote_average}
                      date_release={
                        item.release_date
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
        </div>
      </div>
    </section>
  );
};

export default Trending;
