import CardMovie from "../components/fragments/CardMovie";
const CollectionMovie = ({ collection_movie }) => {
  console.log(collection_movie);
  return (
    <section>
      this is movie collection section
      <div className="px-5 hidden-scroll bg-transparent mx-20">
        <div className="flex w-fit min-h-fit gap-x-10 py-5">
          {collection_movie?.map((movie) => {
            return (
              <CardMovie key={movie.id} id={movie.id} media_type={movie.media_type}>
                <CardMovie.Image
                  poster_path={movie.poster_path}
                  title={movie.title ? movie.title : movie.name}
                ></CardMovie.Image>
                <CardMovie.Title
                  title={movie.title ? movie.title : movie.name}
                ></CardMovie.Title>
                <CardMovie.Footer
                  rating={movie.vote_average}
                  date_release={movie.release_date}
                ></CardMovie.Footer>
              </CardMovie>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionMovie;
