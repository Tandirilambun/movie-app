import { Fragment } from "react";
import { baseImgURL } from "../../../config";

const CardReview2 = ({ author, content, created_at, updated_at }) => {
  const trimName = author.name.trim() === "" ? "Anonymous" : author.name;
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return (
    <Fragment>
      <div className="w-full min-h-fit p-5 mb-10 last:mb-0 rounded-lg border-[1px] border-[#2f2f2f]">
        <div id={`author-profile-${author.name}`} className="flex mb-4">
          <div className="self-center mr-5">
            <img
              src={
                author.avatar_path
                  ? `${baseImgURL}original/${author.avatar_path}`
                  : "/icon/profile-icon.png"
              }
              alt={`${author.name}`}
              className="w-8 h-8 object-cover rounded-full bg-[#acacac]"
            />
          </div>
          <div>
            <p className="text-white font-commissioner">{author.username}</p>
            <p className="text-[#989898] font-commissioner text-sm">
              {trimName}
            </p>
          </div>
          <div className="text-[#989898] font-commissioner text-xs ml-auto ">
            <p>Updated on</p>
            <p>{new Date(updated_at).toLocaleString("id-ID", options)}</p>
          </div>
        </div>
        <div
          id={`author-content-${author.name}`}
          className="text-white font-commissioner text-xs"
        >
          <Content paragraph={content}></Content>
        </div>
      </div>
    </Fragment>
  );
};

const Content = ({ paragraph }) => {
  const bio = paragraph?.split("\n").map((line, index) => (
    <p className="mb-3 text-sm" key={index}>
      {line}
    </p>
  ));
  return bio;
};

export default CardReview2;
