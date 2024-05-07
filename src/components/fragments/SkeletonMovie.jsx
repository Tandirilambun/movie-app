import { Fragment } from "react";

const SkeletonMovie = () => {
  return (
    <Fragment>
      <div className="w-56 h-full animate-pulse">
        <div className="w-full h-80 bg-[#d2d2d2] rounded-2xl mb-5"></div>
        <div className="w-40 h-5 bg-[#d2d2d2] rounded-2xl mb-3"></div>
        <div className="w-20 h-5 bg-[#d2d2d2] rounded-2xl"></div>
      </div>
    </Fragment>
  );
};

export default SkeletonMovie;
