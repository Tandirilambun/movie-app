import { useState } from "react";
import { baseImgURL } from "../../config";

const Episode = ({ status, last_episode_to_air, next_episode_to_air }) => {
  const date_option = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <section className="py-12 px-5">
      <div className="font-commissioner text-white text-3xl font-bold">
        <h1>Episodes</h1>
      </div>
      <div className="py-5">
        <div className="w-full border-[1px] border-[#2f2f2f] p-5 rounded-xl">
          <div>
            <h1 className="font-bold font-commissioner text-white text-center animate-bounce">
              Latest Episode Upload
            </h1>
            <img
              src={`${baseImgURL}original/${last_episode_to_air?.still_path}`}
              alt=""
              className="w-full rounded-xl my-3"
            />
            <div className="text-white">
              <h2 className="font-commissioner">
                Eps. {last_episode_to_air?.episode_number} -{" "}
                {last_episode_to_air?.name}
              </h2>
              <p className="text-sm my-3">{last_episode_to_air?.overview}</p>
            </div>
          </div>
          <p className="text-[#989898] font-commissioner text-end text-sm font-light">
            Uploaded on{" "}
            {new Date(last_episode_to_air?.air_date).toLocaleString(
              "id-ID",
              date_option
            )}{" "}
          </p>
        </div>
      </div>
      {next_episode_to_air ? (
        <div>
          <div className="w-full flex flex-col justify-center items-center mb-4 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-white"
              width="24"
              height="24"
            >
              <title>arrow-down-circle-outline</title>
              <path d="M11,6H13V14L16.5,10.5L17.92,11.92L12,17.84L6.08,11.92L7.5,10.5L11,14V6M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20Z" />
            </svg>
            <h1 className="font-commissioner text-white font-bold">
              Next Episode
            </h1>
          </div>
          <div className="w-full border-[1px] border-[#2f2f2f] p-5 rounded-xl">
            <div>
              <div className="flex items-center gap-x-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-white"
                >
                  <title>calendar-month-outline</title>
                  <path d="M7 11H9V13H7V11M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 7H19V5H5V7M19 19V9H5V19H19M15 13V11H17V13H15M11 13V11H13V13H11M7 15H9V17H7V15M15 17V15H17V17H15M11 17V15H13V17H11Z" />
                </svg>
                <p className="text-lg font-commissioner text-white">
                  {new Date(next_episode_to_air?.air_date).toLocaleString(
                    "id-ID",
                    date_option
                  )}
                </p>
              </div>
              <div>
                <h2 className="font-commissioner text-white">
                  Eps. {next_episode_to_air.episode_number} -{" "}
                  {next_episode_to_air.name}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-commissioner text-white text-xl font-bold text-center">
          This is the last episode
        </h1>
      )}
    </section>
  );
};

export default Episode;
