import CardMovie from "../components/fragments/CardMovie";

const PeopleMovie = ({ cast }) => {
    console.log(cast);
  return (
    <section className="mb-5 p-10 ">
      <div>
        <h1 className="text-2xl font-bold text-white font-commissioner mb-2">
          Known for
        </h1>
        <div className="hidden-scroll">
          <div className="flex w-fit min-h-fit gap-x-3 py-5 px-2">
            {cast?.map((item, index) => {
              return (
                <CardMovie
                  key={index}
                  id={item.id}
                  media_type="movie"
                  size_link="w-40"
                >
                  <CardMovie.Image
                    poster_path={item.poster_path}
                    title={item.title ? item.title : item.name}
                    size_img="h-56"
                    type="movie"
                    rating={item.vote_average}
                  ></CardMovie.Image>
                  <CardMovie.Title
                    title={item.title ? item.title : item.name}
                    font_size="text-xs"
                  ></CardMovie.Title>
                </CardMovie>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleMovie;
