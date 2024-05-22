import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPeople } from "../services/services.api";
import PeopleBio from "../layouts/PeopleBio";
import Biography from "../layouts/Biograph";
import PeopleMovie from "../layouts/PeopleMovie";
import PeopleHistory from "../layouts/PeopleHistory";
import { baseImgURL } from "../../config";
import NavigationBar from "../components/Navbar";
const PeoplePage = () => {
  const { peopleId } = useParams();
  const [people, setPeople] = useState([]);
  const [images, setImages] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviePeople, setMoviePeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async (id) => {
      setIsLoading(true);
      try {
        const res = await getPeople(id);
        setPeople(res);
        setImages(res.images.profiles);
        setCast(res.combined_credits.cast);
        setCrew(res.combined_credits.crew);
        setMoviePeople(
          res.movie_credits.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 8)
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPeople(peopleId);
  }, [peopleId]);
  // console.log();
  return !isLoading ? (
    <>
      <NavigationBar />
      <div
        className="bg-center"
        style={{
          backgroundImage: `url(${baseImgURL}/original/${images[0]?.file_path})`,
        }}
      >
        <div className="bg-black/90 backdrop-blur-lg">
          <div className="flex mx-40 gap-x-5">
            <aside className="w-1/3 my-24">
              <PeopleBio people={people} cast={cast.length}></PeopleBio>
            </aside>
            <main className="w-2/3 my-24">
              <Biography bio={people}></Biography>
              {moviePeople.length > 0 && (
                <PeopleMovie cast={moviePeople}></PeopleMovie>
              )}
              <PeopleHistory cast={cast} crew={crew}></PeopleHistory>
            </main>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="min-h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default PeoplePage;
