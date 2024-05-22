import { useEffect } from "react";
import { ytEmbedURL } from "../../../config";
const TrailerOverlay = ({ keyVideo }) => {
  const overlayEle = document.getElementById("trailer-overlay");

  const closeOverlay = () => {
    overlayEle.classList.remove("block");
    overlayEle.classList.add("hidden");
  };
  return (
    <div
      id="trailer-overlay"
      className={`hidden w-full h-full bg-[#191919]/75 z-[999] fixed top-0 left-0`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-black w-[1378px] h-fit rounded-sm">
          <div className="flex justify-between py-3 px-5">
            <h1 className="text-white font-commissioner font-medium">
              {keyVideo.title}
            </h1>
            <div
              id="close-trailer"
              className="cursor-pointer"
              onClick={closeOverlay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                className="fill-white"
              >
                <title>window-close</title>
                <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
              </svg>
            </div>
          </div>
          {keyVideo.key && (
            <iframe
              id="trailer-video"
              src={`${ytEmbedURL}${keyVideo.key}`}
              title={keyVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="h-[774px] w-full rounded-b-sm"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrailerOverlay;
