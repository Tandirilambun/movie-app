import { useCallback, useEffect, useState } from "react";
import {
  getSeriesTodayAiring,
  getSeriesOnTheAir,
  getSeriesPopular,
  getSeriesTopRated,
  getSeriesTrending,
} from "../services/services.api";
import CategoriesButton from "../components/elements/CategoriesButton";
import CardMovie from "../components/fragments/CardMovie";
const Series = () => {
  const [series, setSeries] = useState([]);
  const [tabActive, setTabActive] = useState("airing-today");
  const airing_today = useCallback(async () => {
    setTabActive("airing-today");
    try {
      const response = await getSeriesTodayAiring();
      setSeries(response);
    } catch (error) {
      console.log("Error Fetching Series Today Airing", error);
    }
  }, [setTabActive, setSeries]);
  const on_the_air = useCallback(async () => {
    setTabActive("on-the-air");
    try {
      const response = await getSeriesOnTheAir();
      setSeries(response);
    } catch (error) {
      console.log("Error Fetching Series On The Air", error);
    }
  }, [setTabActive, setSeries]);
  const popular = useCallback(async () => {
    setTabActive("popular");
    try {
      const response = await getSeriesPopular();
      setSeries(response);
    } catch (error) {
      console.log("Error Fetching Series Popular", error);
    }
  }, [setTabActive, setSeries]);
  const top_rated = useCallback(async () => {
    setTabActive("top-rated");
    try {
      const response = await getSeriesTopRated();
      setSeries(response);
    } catch (error) {
      console.log("Error Fetching Series Top Rated", error);
    }
  }, [setTabActive, setSeries]);
  useEffect(() => {
    airing_today();
  }, [airing_today]);
  const tabChanges = (tab) => {
    if (tab === "airing-today" && tabActive !== "airing-today") {
      airing_today();
    } else if (tab === "on-the-air" && tabActive !== "on-the-air") {
      on_the_air();
    } else if (tab === "popular" && tabActive !== "popular") {
      popular();
    } else if (tab === "top-rated" && tabActive !== "top-rated") {
      top_rated();
    }
  };

  const backdropChanges = (img_path) => {
    const divEle = document.getElementById("series-container");
    divEle.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${img_path})`;
  };

  return (
    <section
      id="series-container"
      className="bg-cover bg-center ease-in-out duration-500 mx-20 rounded-xl my-20"
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${series[0]?.backdrop_path})`}}
    >
      <div className="rounded-xl backdrop-blur-3xl pt-20 bg-[#191919]/30">
        <div className="px-40 mb-10">
          <div className="flex items-center">
            <div className="text-4xl font-semibold font-montserrat text-white flex items-center me-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="42"
                height="42"
                className="fill-white"
              >
                <title>television-classic</title>
                <path d="M8.16,3L6.75,4.41L9.34,7H4C2.89,7 2,7.89 2,9V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V9C22,7.89 21.11,7 20,7H14.66L17.25,4.41L15.84,3L12,6.84L8.16,3M4,9H17V19H4V9M19.5,9A1,1 0 0,1 20.5,10A1,1 0 0,1 19.5,11A1,1 0 0,1 18.5,10A1,1 0 0,1 19.5,9M19.5,12A1,1 0 0,1 20.5,13A1,1 0 0,1 19.5,14A1,1 0 0,1 18.5,13A1,1 0 0,1 19.5,12Z" />
              </svg>
              <p>TV Series</p>
            </div>
            <div className="flex gap-x-10 categories">
              <CategoriesButton
                name="airing-today"
                isActive={`${tabActive === "airing-today" ? "active" : ""}`}
                onclick={() => {
                  tabChanges("airing-today");
                }}
              >
                Airing Today
              </CategoriesButton>
              <CategoriesButton
                name="on-the-air"
                isActive={`${tabActive === "on-the-air" ? "active" : ""}`}
                onclick={() => {
                  tabChanges("on-the-air");
                }}
              >
                On The Air
              </CategoriesButton>
              <CategoriesButton
                name="popular"
                isActive={`${tabActive === "popular" ? "active" : ""}`}
                onclick={() => {
                  tabChanges("popular");
                }}
              >
                Popular
              </CategoriesButton>
              <CategoriesButton
                name="top-rated"
                isActive={`${tabActive === "top-rated" ? "active" : ""}`}
                onclick={() => {
                  tabChanges("top-rated");
                }}
              >
                Top Rated
              </CategoriesButton>
            </div>
          </div>
        </div>
        <div className="px-5 mx-20 hidden-scroll">
          <div className="flex w-fit min-h-fit gap-x-10 py-5">
            {series.length > 0 ? (
              series.map((serie) => {
                return (
                  <CardMovie key={serie.id} id={serie.id} media_type="tv" onmouseenter={() => backdropChanges(serie.backdrop_path)}>
                    <CardMovie.Image
                      poster_path={serie.poster_path}
                      title={serie.name}
                    />
                    <CardMovie.Title title={serie.name} />
                    <CardMovie.Footer
                      rating={serie.vote_average}
                      date_release={serie.first_air_date}
                    />
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

export default Series;
