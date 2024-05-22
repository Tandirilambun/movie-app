import { Fragment } from "react";
import { Link } from "react-router-dom";
import { baseImgURL } from "../../../config";
const CrewCard = ({ person }) => {
  return (
    <Fragment>
      <Link to={`/people/${person.id}`} className="m-3 p-2 border-2 border-black hover:border-white rounded-xl">
        <div className="flex items-center">
          <div className="bg-">
            <img
              className={`${person.profile_path ? '' : 'bg-[#191919] p-5' } w-20 h-20 object-cover rounded-xl`}
              src={person.profile_path ? `${baseImgURL}original/${person?.profile_path}` : "/icon/profile-icon.png"}
              alt=""
            />
          </div>
          <div className="text-white font-commissioner h-full p-3">
            <p className="text-sm font-semibold">{person.name}</p>
            <p className="text-xs">{person.job}</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default CrewCard;
