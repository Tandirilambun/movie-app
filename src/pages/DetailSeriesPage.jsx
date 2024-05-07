import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailSeries } from "../services/services.api";
import Info from "../layouts/Info";
import Videos from "../layouts/Videos";
import Cast from "../layouts/Cast";
import Reviews from "../layouts/Reviews";
import AdditionalInfo from "../layouts/AdditionalInfo";
import Season from "../layouts/Season";
import Episode from "../layouts/Episodes";
import Recommendation from "../layouts/Recommendation";
import NavigationBar from "../components/Navbar";

const DetailSeriesPage = () => {
  const { seriesId } = useParams();
  const [series, setSeries] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recom, setRecom] = useState([]);
  const [videos, setVideos] = useState([]);
  const [season, setSeason] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [logo, setLogo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchingData = async (id) => {
      setIsLoading(true);
      try {
        const res = await getDetailSeries(id);
        setSeries(res);
        setCast(res.credits.cast);
        setCrew(res.credits.crew);
        setReviews(res.reviews.results);
        setRecom(res.recommendations.results);
        setVideos(res.videos.results);
        setSeason(
          res.seasons.sort((a, b) => b.season_number - a.season_number)
        );
        setKeywords(res.keywords.results);
        setLogo(res.images.logos.filter((logo) => logo.iso_639_1 === "en")[0]);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingData(seriesId);
  }, [seriesId]);
  console.log(series);
  return !isLoading ? (
    <>
      <NavigationBar/>
      <Info
        backdrop={series.backdrop_path}
        poster={series.poster_path}
        title={series.name}
        original_title={series.original_name}
        release_date={series.first_air_date}
        runtime={{
          season: series.number_of_seasons,
          episode: series.number_of_episodes,
        }}
        genres={series.genres}
        vote_average={series.vote_average}
        tagline={series.tagline}
        overview={series.overview}
        spoken_languages={series.spoken_languages}
        crew={crew}
        logo={logo}
        type="tv"
      />
      <div className="flex border-b-[1px] border-[#2f2f2f]">
        <main className="w-3/4">
          <Videos item_title={series.name} trailer={videos} />
          <Cast cast={cast.slice(0, 10)} item_id={seriesId} type="tv"/>
          <Reviews reviews={reviews} item_id={seriesId} />
          <Season season={season}></Season>
        </main>
        <aside className="w-1/4">
          <AdditionalInfo
            status={series.status}
            languages={series.original_language}
            budget={series.budget}
            revenue={series.revenue}
            production_companies={series.production_companies}
            keywords={keywords}
          />
          <Episode
            status={series.status}
            last_episode_to_air={series.last_episode_to_air}
            next_episode_to_air={series.next_episode_to_air}
          />
        </aside>
      </div>
      <Recommendation recom={recom} />
    </>
  ) : (
    <div className="min-h-screen flex justify-center items-center">
      <div class="loader"></div>
    </div>
  );
};

export default DetailSeriesPage;
