import { baseImgURL } from "../../config";

const Info = ({
  info_detail = {},
  backdrop,
  poster,
  title,
  original_title,
  release_date,
  runtime,
  genres,
  vote_average,
  tagline,
  overview,
  spoken_languages,
  crew,
  logo,
  type,
}) => {
  const writerFilter = crew?.filter(
    (data) =>
      data.job === "Novel" ||
      data.job === "Writer" ||
      data.job === "Story" ||
      data.job === "Original Concept"
  );
  return (
    <>
      <section
        className={`min-h-dvh ${backdrop ? "bg-cover bg-center" : "bg-black"}`}
        style={{
          backgroundImage: `url(${baseImgURL}original/${backdrop})`,
        }}
      >
        <div className="min-h-dvh bg-gradient-to-t from-[#191919] to-[#191919]/60 px-60 py-24">
          <div>
            <h1 className="text-white font-commissioner font-medium text-2xl">
              Movies
            </h1>
            <h2 className="text-gray-400 font-commissioner font-medium text-sm mb-10">
              On App
            </h2>
            <div className="flex gap-x-20 min-h-fit">
              <div className="flex flex-wrap flex-col justify-between ">
                <div>
                  {logo ? (
                    <img
                      src={`${baseImgURL}w500/${logo?.file_path}`}
                      alt=""
                      className="h-24"
                      loading="lazy"
                    />
                  ) : (
                    <h1 className="text-white font-commissioner font-extrabold text-4xl">
                      ({title})
                    </h1>
                  )}
                </div>
                {title !== original_title && (
                  <div>
                    <h1 className="text-white font-commissioner font-extrabold text-4xl">
                      ({original_title})
                    </h1>
                  </div>
                )}
                <div>
                  <h2 className="text-gray-400 font-commissioner font-medium mb-1">
                    <span className="mr-2">
                      {release_date?.substring(0, 4)}
                    </span>
                    <Runtime runtime={runtime} type={type} />
                  </h2>
                  <p className="text-gray-400 font-commissioner font-medium mb-1">
                    {genres?.map((genre, index) => {
                      return (
                        <span key={genre.id}>
                          {genre.name}
                          {index === genres.length - 1 ? "" : ", "}
                        </span>
                      );
                    })}
                  </p>
                  <div className="flex mb-1 gap-x-10">
                    <div className=" text-gray-400 font-commissioner font-medium flex items-center">
                      <img
                        src="/icon/tomato-icon-96.png"
                        alt="tomato-icon-96"
                        className="h-7 mr-1"
                      />
                      {`${Math.round((vote_average * 100) / 10)}%`}
                    </div>
                    <div className="text-gray-400 font-commissioner font-medium flex items-center">
                      <img
                        src="/icon/imdb-icon-96.png"
                        alt="tomato-icon-96"
                        className="h-9 mr-1"
                      />
                      <p>{`${vote_average?.toFixed(1)}`}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-gray-300 font-commissioner font-medium text-lg mb-2 italic">
                    {tagline}
                  </p>
                  <div className="text-gray-300 font-commissioner font-medium text-base">
                    <Overview overview={overview} />
                  </div>
                </div>
                <div>
                  <table className="table-auto border-separate border-spacing-y-1">
                    <tbody>
                      <Directed crew={crew} />
                      <tr className="text-gray-400 font-commissioner font-medium text-base">
                        <td>Written by</td>
                        <td className="text-gray-300 pl-10">
                          {writerFilter
                            ? writerFilter.map((people, index) => {
                                return (
                                  <span
                                    key={people.name}
                                    className="text-gray-300"
                                  >
                                    {people.name}
                                    {index === writerFilter.length - 1
                                      ? ""
                                      : ", "}
                                  </span>
                                );
                              })
                            : "-"}
                        </td>
                      </tr>
                      <tr className="text-gray-400 font-commissioner font-medium text-base">
                        <td>Audio</td>
                        <td className="text-gray-300 pl-10">
                          {" "}
                          {spoken_languages?.map((lang, index) => {
                            return (
                              <span className="text-gray-300" key={lang.name}>
                                {lang.name}
                                {index === spoken_languages.length - 1
                                  ? ""
                                  : ", "}
                              </span>
                            );
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <img
                src={`${baseImgURL}/original/${poster}`}
                alt=""
                className="h-[33rem]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Runtime = ({ runtime, type }) => {
  if (type === "movie") {
    return <span> {`${Math.floor(runtime / 60)}hr ${runtime % 60}min`}</span>;
  } else if (type === "tv") {
    return (
      <span>{`${runtime.season} season - ${runtime.episode} episodes`} </span>
    );
  }
};
const Overview = ({ overview }) => {
  const desc = overview?.split("\n").map((line, index) => (
    <p className="mb-3" key={index}>
      {line}
    </p>
  ));
  return desc;
};

const Directed = ({ crew }) => {
  const fil_director = crew?.filter((people) => people.job === "Director");
  // return fil_director[0]?.name;
  if (fil_director.length <= 0) {
    return;
  }
  return (
    <tr className="text-gray-400 font-commissioner font-medium text-base">
      <td>Directed by </td>
      <td className="text-gray-300 pl-10">{fil_director[0]?.name}</td>
    </tr>
  );
};

export default Info;
