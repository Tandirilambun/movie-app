import { Fragment } from "react";
import CastAvatar from "../components/fragments/CastAvatar";
import { Link } from "react-router-dom";
const Cast = ({ cast, item_id, type }) => {
  return (
    <>
      <section className="py-12 mx-20 px-5 border-b-[1px] border-[#2f2f2f]">
        <div>
          <h1 className="font-commissioner text-white text-3xl font-bold">
            Cast & Crew
          </h1>
          <div className="px-5 hidden-scroll">
            <div className="flex w-fit gap-x-16 py-5">
              {cast.map((people, index) => {
                return (
                  <CastAvatar
                    key={people.credit_id}
                    id={people.id}
                    name={people.name}
                    character={people.character}
                    path={people.profile_path}
                  ></CastAvatar>
                );
              })}
              {cast.length >= 10 && (
                <Fragment>
                  <Link
                    to={`cast`}
                    className="w-40 h-full group my-auto ease-in-out duration-150 scale-100 hover:ease-in-out hover:duration-150 hover:scale-110"
                  >
                    <div className="flex justify-center items-center">
                      <div className="w-10 h-10 rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <title>chevron-right</title>
                          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-commissioner font-medium text-center text-sm">
                        See More
                      </p>
                    </div>
                  </Link>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cast;
