import CardMovie from "../components/fragments/CardMovie";
const Recommendation = ({ recom }) => {
  return (
    <>
      <section className="py-12 mx-20 px-5 border-b-[1px] border-[#2f2f2f]">
        <div>
          <h1 className="font-commissioner text-white text-3xl font-bold">
            Recommendation
          </h1>
        </div>
        <div className="hidden-scroll">
          <div className="flex w-fit min-h-fit gap-x-10 py-5 px-2">
            {recom.length > 0 ? (
              recom.map((movie, index) => {
                return (
                  <CardMovie
                    key={`${movie.id}${index}`}
                    id={movie.id}
                    size_link="w-40"
                    media_type={movie.media_type}
                  >
                    <CardMovie.Image
                      poster_path={movie.poster_path}
                      title={movie.title ? movie.title : movie.name}
                      size_img="h-56"
                      type={movie.media_type}
                      rating={movie.vote_average}
                    ></CardMovie.Image>
                    <CardMovie.Title
                      title={movie.title ? movie.title : movie.name}
                      font_size="text-sm"
                    ></CardMovie.Title>
                  </CardMovie>
                );
              })
            ) : (
              <p className="text-white text-center font-commissioner">
                No Recommendation Movies Found
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
