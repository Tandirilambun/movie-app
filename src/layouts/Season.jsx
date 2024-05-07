import { baseImgURL } from "../../config";
import CardSeason from "../components/fragments/CardSeason";
const Season = ({ season }) => {
  return (
    <section className="py-12 mx-20 px-5 border-t-[1px] border-[#2f2f2f]">
      <div>
        <h1 className="font-commissioner text-white text-3xl font-bold">
          Season
        </h1>

        <div className="hidden-scroll">
          <div className="flex w-fit min-h-fit gap-x-7 py-5">
            {season?.length > 0 ? (
              season.map((item) => {
                return (
                  <CardSeason
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    episode_count={item.episode_count}
                    vote_average={item.vote_average}
                    air_date={item.air_date}
                    poster_path={item.poster_path}
                  />
                );
              })
            ) : (
              <p className="text-white text-center font-commissioner">
                No Recommendation Movies Found
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Season;
