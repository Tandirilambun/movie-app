import FilterLayout from "../layouts/ItemLayout";
import MovieLayout from "../layouts/MovieLayout";
const MoviePages = () => {
  return (
    <>
      <div className="flex mx-20">
        <FilterLayout></FilterLayout>
        <MovieLayout></MovieLayout>
      </div>
    </>
  );
};

export default MoviePages;
