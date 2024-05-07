import { useState } from "react";
import TrailerCard from "../components/fragments/TrailerCard";
import { ytEmbedURL } from "../../config";

const Videos = ({ item_title, trailer }) => {
  const [keyVideo, setKeyVideo] = useState({});
  const overlayEle = document.getElementById("trailer-overlay");
  const getKeyVideo = (key, title) => {
    setKeyVideo({ key: key, title: title });
    overlayEle.classList.remove("hidden");
    overlayEle.classList.add("block");
  };
  const closeOverlay = () => {
    document.getElementById("trailer-video").src = "";
    overlayEle.classList.remove("block");
    overlayEle.classList.add("hidden");
    document.getElementById(
      "trailer-video"
    ).src = `${ytEmbedURL}${keyVideo.key}`;
  };

  const fadeEdge = () => {
    const id_element = document.querySelector(".hidden-scroll");
    const scrollWidth = id_element.scrollWidth;
    const clientWidth = id_element.clientWidth;
    const scrollable = scrollWidth - clientWidth;
    const leftScroll = id_element.scrollLeft;
    const result = leftScroll  >= scrollable-5;
    if(result) {
      document.getElementById("scroll-trailer").classList.remove("is-fading");
      document.getElementById("scroll-trailer").classList.add("is-hidden");

    }else{
      document.getElementById("scroll-trailer").classList.remove("is-hidden");
      document.getElementById("scroll-trailer").classList.add("is-fading");
    }
  };

  return (
    <>
      <section className="py-12 mx-20 px-5 border-b-[1px] border-[#2f2f2f]">
        <div className="container-trailer">
          <h1 className="font-commissioner text-white text-3xl font-bold">{`Watch ${item_title} Trailer`}</h1>
          <div id="scroll-trailer" className="should-fade ease-in-out duration-300 is-fading" >
            <div className="hidden-scroll" onScroll={fadeEdge}>
              <div className="flex w-fit gap-x-5 pt-10 pb-5">
                {trailer.map((video) => {
                  return (
                    <TrailerCard
                      key={video.id}
                      video={video.key}
                      onclick={() => getKeyVideo(video.key, video.name)}
                    ></TrailerCard>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            id="trailer-overlay"
            className="hidden w-full h-full bg-[#191919]/75 z-[999] fixed top-0 left-0"
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
        </div>
      </section>
    </>
  );
};

export default Videos;
