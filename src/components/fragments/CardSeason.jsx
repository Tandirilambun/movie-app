import { Fragment } from "react";
import { Link } from "react-router-dom";
import { baseImgURL } from "../../../config";

const CardSeason = ({
  id,
  name,
  episode_count,
  vote_average,
  air_date,
  poster_path,
}) => {
  return (
    <Fragment>
      <Link to={`/season/${id}`} className="w-40 h-full group text-sm">
        <img
          src={`${baseImgURL}w500/${poster_path}`}
          alt=""
          className="w-full h-56 rounded-md mb-5"
          loading="lazy"
        />
        <p className="font-montserrat text-white font-semibold ">{name}</p>
        <p className="font-montserrat text-white font-semibold">
          {episode_count} eps
        </p>
        <div className="flex justify-between mt-2">
          <p className="font-montserrat text-gray-600 font-semibold">
            {new Date(air_date).getFullYear()}
          </p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              className="fill-yellow-500"
              viewBox="0 0 24 24"
            >
              <title>star</title>
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            {vote_average && (
              <p className="font-montserrat text-yellow-500 ml-1 font-semibold">
                {vote_average.toFixed(1)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default CardSeason;
