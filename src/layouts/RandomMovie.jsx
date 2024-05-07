import { useCallback, useEffect, useState } from "react";
import { getTrendingAll} from "../services/services.api";
import { baseImgURL } from "../../config";
import { Link } from "react-router-dom";
const LatestMovie = () => {
  const [latestMovie, setLatestMovie] = useState([]);

  const getLatest = useCallback(() => {
    getTrendingAll().then((res) => {
      const randomItem = Math.floor(Math.random() * res.length);
      setLatestMovie(res[randomItem]);
    });
  },[setLatestMovie])
  useEffect(() => {
    getLatest();
  }, []);
  return (
    <>
      <section
        className={`min-h-dvh ${
          latestMovie.backdrop_path ? "bg-cover bg-center" : "bg-black"
        }`}
        style={{
          backgroundImage: `url(${baseImgURL}original/${latestMovie.backdrop_path})`,
        }}
      >
        <div className="min-h-dvh bg-gradient-to-t from-[#191919] to-[#191919]/60 p-60">
          <div className="flex flex-wrap items-center pb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="fill-yellow-500 self-center"
              viewBox="0 0 24 24"
            >
              <title>star</title>
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <h2 className="text-white font-semibold ml-2 text-xl">
              {(latestMovie.vote_average)?.toFixed(1)}
            </h2>
          </div>
          <h1 className="text-white font-semibold text-8xl pb-10 pr-60 font-montserrat">
            {latestMovie.title ? latestMovie.title : latestMovie.name}
          </h1>
          <p className="text-white font-base text-lg pb-10 pr-96 font-montserrat">
            {latestMovie.overview}
          </p>
          <Link to={`/${latestMovie.media_type}/${latestMovie.id}`} className="w-fit font-montserrat ease-in-out duration-300 scale-100 flex items-center justify-center px-14 py-4 rounded-full bg-[rgb(255,0,0)] text-white font-bold shadow-[0_0_40px_-10px_rgba(255,0,0,1)] hover:shadow-[0_0_50px_-10px_rgba(255,0,0,1)] hover:ease-in-out hover:duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" fill="white" viewBox="0 0 24 24">
              <title>play</title>
              <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            </svg>
            Watch
          </Link>
        </div>
      </section>
    </>
  );
};

export default LatestMovie;
