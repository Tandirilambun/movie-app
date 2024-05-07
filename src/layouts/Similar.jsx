import CardMovie from "../components/fragments/CardMovie";

const Similar = ({ similar, type }) => {
  console.log(similar)
  return (
    <>
      <section className="py-12 mx-20 px-5">
        <div>
          <h1 className="font-commissioner text-white text-3xl font-bold">
            Similar {type}
          </h1>
          <p className="font-commissioner text-[#8b8b8b]">
            Based on {type} preferences by genres and keyword
          </p>
        </div>
        <div className="hidden-scroll">
          <div className="flex w-fit min-h-fit gap-x-10 py-5">
            {similar.map((movie, index) => {
              return (
                <CardMovie
                  key={`${movie.id}${index}`}
                  size_link="w-40"
                  id={movie.id}
                  media_type={movie.media_type}
                >
                  <CardMovie.Image
                    poster_path={movie.poster_path}
                    title={movie.title ? movie.title : movie.name}
                    size_img="h-56"
                  ></CardMovie.Image>
                  <CardMovie.Title
                    title={movie.title ? movie.title : movie.name}
                    font_size="text-sm"
                  ></CardMovie.Title>
                </CardMovie>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Similar;
