import { Link } from "react-router-dom";
import { baseImgURL } from "../../config";
const Collection = ({ collection }) => {
  return (
    collection.parts?.length > 0 && (
      <section className="py-12 mx-20 px-5 border-b-[1px] border-[#2f2f2f]">
        <div
          className="h-96 bg-center bg-cover rounded-xl "
          style={
            collection?.backdrop_path
              ? {
                  backgroundImage: `url(${baseImgURL}original/${collection?.backdrop_path})`,
                }
              : {
                  backgroundImage: `url(${baseImgURL}original/${collection?.parts[0].backdrop_path})`,
                }
          }
        >
          <div className="h-full bg-gradient-to-r px-60 from-[#191919]/90 to-[#191919]/25 rounded-xl relative overflow-hidden">
            <div className="h-full flex justify-between items-center">
              <div className="w-96">
                <h1 className="text-white font-commissioner text-5xl mb-5 font-semibold">
                  {collection.name}
                </h1>
                <Link
                  to={`/collection/${collection.id}`}
                  className="w-fit text-white font-commissioner font-bold bg-[#ff0000] p-4 flex items-center justify-center rounded-full ease-in-out duration-300 scale-100 hover:ease-in-out hover:duration-300 hover:scale-105"
                >
                  See Collection
                </Link>
              </div>

              <div className="flex collection-poster gap-x-2 h-full">
                {collection.parts.map((part) => {
                  return (
                    <div key={part.id} className="h-full w-40 container-img">
                      <img
                        src={`${baseImgURL}w400/${part.poster_path}`}
                        alt=""
                        className="w-full h-60 rounded-md"
                        loading="lazy"
                      />
                      <p className="text-center font-commissioner w-full text-white text-sm bg-[#191919]/50 p-1 rounded-md">
                        {part.original_title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Collection;
