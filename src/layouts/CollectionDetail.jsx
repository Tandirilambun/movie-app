import { baseImgURL } from "../../config";
const CollectionDetail = ({ collection }) => {
  return (
    <section
      className={`${
        collection.backdrop_path ? "bg-cover bg-center" : "bg-black"
      }`}
      style={{
        backgroundImage: `url(${baseImgURL}original/${collection?.backdrop_path})`,
      }}
    >
      <div className="px-60 py-24 bg-gradient-to-t from-[#191919] to-[#191919]/60">
        <div className="flex gap-x-20">
          <div className="">
            <img
              className="h-[32rem] rounded-2xl"
              src={`${baseImgURL}w500/${collection?.poster_path}`}
              alt=""
            />
          </div>
          <article className="flex items-center">
            <div className="text-white font-commissioner">
              <h1 className="text-5xl mb-5 font-bold">{collection?.name}</h1>
              <div className="mb-5 text-lg">
                <h2 className="font-semibold">Overview</h2>
                <p>{collection?.overview}</p>
              </div>
              <div className="text-lg">
                <h2 className="font-semibold">Number of Movies</h2>
                <p>{collection?.parts?.length} movies</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CollectionDetail;
