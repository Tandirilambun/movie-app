import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie, getMovieCollection } from "../services/services.api";
import Info from "../layouts/Info";
import Videos from "../layouts/Videos";
import Cast from "../layouts/Cast";
import Reviews from "../layouts/Reviews";
import Recommendation from "../layouts/Recommendation";
import AdditionalInfo from "../layouts/AdditionalInfo";
import Collection from "../layouts/Collection";
import NavigationBar from "../components/Navbar";

const DetailMoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recom, setRecom] = useState([]);
  const [videos, setVideos] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [logo, setLogo] = useState();
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async (id) => {
      setIsLoading(true);
      try {
        const res = await getDetailMovie(id);
        setMovie(res);
        setCast(res.credits.cast);
        setCrew(res.credits.crew);
        setReviews(res.reviews.results);
        setRecom(res.recommendations.results);
        setVideos(
          res.videos.results
            .filter(
              (video) => video.type === "Trailer" && video.site === "YouTube"
            )
            .sort((a, b) => a.name.localeCompare(b.name))
        );
        setKeywords(res.keywords.keywords);
        setLogo(res.images.logos.filter((logo) => logo.iso_639_1 === "en")[0]);
        if (res.belongs_to_collection) {
          const col = await getMovieCollection(res.belongs_to_collection.id);
          setCollection(col);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(movieId);
  }, [movieId]);
  console.log(movie);
  return !isLoading ? (
    <>
      <NavigationBar />
      <Info
        backdrop={movie.backdrop_path}
        poster={movie.poster_path}
        title={movie.title}
        original_title={movie.original_title}
        release_date={movie.release_date}
        runtime={movie.runtime}
        genres={movie.genres}
        vote_average={movie.vote_average}
        tagline={movie.tagline}
        overview={movie.overview}
        spoken_languages={movie.spoken_languages}
        crew={crew}
        logo={logo}
        type="movie"
      />
      <div className="flex border-b-[1px] border-[#2f2f2f]">
        <main className="w-3/4">
          <Videos item_title={movie.title} trailer={videos} />
          <Cast cast={cast.slice(0, 10)} item_id={movieId} type="movie"/>
          <Reviews reviews={reviews} item_id={movieId} />
        </main>
        <aside className="w-1/4">
          <AdditionalInfo
            status={movie.status}
            languages={movie.original_language}
            budget={movie.budget}
            revenue={movie.revenue}
            production_companies={movie.production_companies}
            keywords={keywords}
          />
        </aside>
      </div>
      {movie.belongs_to_collection && <Collection collection={collection} />}
      <Recommendation recom={recom} type="movie" />
    </>
  ) : (
    <div className="min-h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default DetailMoviePage;
