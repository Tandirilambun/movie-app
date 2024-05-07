import { Fragment } from "react";
import { baseImgURL } from "../../../config";
import { Link } from "react-router-dom";

const CastAvatar = ({ id, name, character, path }) => {
  return (
    <Fragment>
      <Link to={`/person/${id}`} className="w-40 h-full ease-in-out duration-150 scale-100 hover:ease-in-out hover:duration-150 hover:scale-110">
        <div className="flex justify-center">
          <img
            src={path ? `${baseImgURL}original/${path}` : "/icon/profile-icon.png"}
            alt='/icon/profile-icon.png'
            className={`${path ? '' : 'bg-[#acacac]' } w-40 h-40 object-cover rounded-full`}
            loading="lazy"
          />
        </div>
        <div className="mt-5">
          <p className="text-white font-commissioner font-medium text-center">
            {name}
          </p>
          <p className="text-[#8b8b8b] font-commissioner font-medium text-center text-xs">
            "{character}"
          </p>
        </div>
      </Link>
    </Fragment>
  );
};

export default CastAvatar;
