import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCredit } from "../services/services.api";
import CastMovie from "../layouts/CastMovie";
import CrewMovie from "../layouts/CrewMovie";
import { baseImgURL } from "../../config";
import NavigationBar from "../components/Navbar";
const CreditPage = () => {
  // console.log(window.location.href);
  const { item, itemId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [detail, setDetail] = useState();
  useEffect(() => {
    const fetchCredit = async (type, id) => {
      setIsLoading(true);
      try {
        const res = await getCredit(type, id);
        setDetail(res);
        setCast(res.credits.cast);
        setCrew(res.credits.crew);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCredit(item, itemId);
  }, [item, itemId]);
  console.log(detail);
  return !isLoading ? (
    <>
      <NavigationBar />
      <div className="flex items-center px-40 py-10 my-20 bg-[#191919] gap-x-10">
        <img
          className="h-60 rounded-lg"
          src={`${baseImgURL}/original/${detail?.poster_path}`}
          alt=""
        />
        <div className="text-white font-commissioner">
          <h1 className="text-2xl text-[#919191]">Cast & Crew for</h1>
          <h2 className="text-7xl font-bold my-5">
            {detail?.title || detail?.name}
          </h2>
          <div
            className="btn-back text-xl text-[#565656] cursor-pointer w-fit hover:text-white flex items-center"
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-white"
            >
              <title>arrow-left</title>
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
            <p className="bg-[#191919] z-10">Back to main</p>
          </div>
        </div>
      </div>
      <CastMovie cast={cast}></CastMovie>
      <CrewMovie crew={crew}></CrewMovie>
    </>
  ) : (
    <div className="min-h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default CreditPage;
