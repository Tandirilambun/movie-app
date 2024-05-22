import { Fragment } from "react";
import { Link } from "react-router-dom";
import { baseImgURL } from "../../../config";

const CastCard = ({ person }) => {
  return (
    <Fragment>
      <Link to={`/people/${person.id}`} className="w-fit h-full rounded-t-full ease-in-out duration-150 scale-100 hover:ease-in-out hover:duration-150 hover:scale-105 border-2 border-black hover:border-white ">
        <div
          className="h-60 bg-cover  w-40 rounded-t-full rounded-2xl flex flex-wrap items-end m-1"
          style={{
            backgroundImage: `url(${baseImgURL}original/${person?.profile_path})`,
          }}
        >
          <div className="text-white bg-black/60 w-full h-16 rounded-xl m-1 p-2 flex justify-center items-center backdrop-blur-sm">
            <div className="text-center text-xs font-commissioner">
              <p className="font-semibold">{person?.name}</p>
              <p>{person?.character}</p>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default CastCard;
