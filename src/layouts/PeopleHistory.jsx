import { Link } from "react-router-dom";

const PeopleHistory = ({ cast, crew }) => {
  console.log(cast);
  const data_cast = groupCastByYear(cast);
  const data_crew = groupCrewByDepartment(crew);
  return (
    <section className="mb-5 p-10 ">
      <div>
        <div>
          <h1 className="text-2xl font-bold text-white font-commissioner mb-2">
            Acting
          </h1>
          {data_cast?.map((data, index) => {
            return (
              <div key={index} className="border-b-2 border-b-white p-4">
                {data.movies?.map((item, index) => {
                  return (
                    <div
                      className="flex gap-x-6 font-commissioner my-3 text-white"
                      key={index}
                    >
                      <p className="text-sm py-1">{data?.year}</p>
                      <div className="w-3 h-3 rounded-full border border-white p-[2px] my-2">
                        <div className="bg-white w-full h-full rounded-full"></div>
                      </div>
                      <div>
                        <Link
                          to={`/${item?.media_type}/${item?.id}`}
                          className="text-base font-medium hover:text-[#01B4E4]"
                        >
                          {item?.original_title
                            ? item?.original_title
                            : item?.name}
                        </Link>
                        {item?.character && (
                          <p className="text-sm">as {item?.character}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {data_crew?.length > 0 && (
            data_crew?.map((data, index) => {
              return (
                <div key={index} className="my-20">
                  <h1 className="text-2xl font-bold text-white font-commissioner mb-2">
                    {data?.department}
                  </h1>
                  {data?.by_year.map((year, index) => {
                    return (
                      <div
                        key={index}
                        className="border-b-2 border-b-white p-4"
                      >
                        {year?.movies.map((movie, index) => {
                          return (
                            <div
                              className="flex gap-x-6 font-commissioner my-3 text-white"
                              key={index}
                            >
                              <p className="text-sm py-1">{year?.year}</p>
                              <div className="w-3 h-3 rounded-full border border-white p-[2px] my-2">
                                <div className="bg-white w-full h-full rounded-full"></div>
                              </div>
                              <div>
                                <Link
                                  to={`/${movie?.media_type}/${movie?.id}`}
                                  className="text-base font-medium hover:text-[#01B4E4]"
                                >
                                  {movie?.original_title
                                    ? movie?.original_title
                                    : movie?.name}
                                </Link>
                                {movie?.job && (
                                  <p className="text-sm">
                                    ...{movie?.job}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

const groupCastByYear = (data) => {
  const groupedByYear = {};
  for (const item of data) {
    const year =
      new Date(item?.release_date).getFullYear() ||
      new Date(item?.first_air_date).getFullYear();
    if (!groupedByYear[year]) {
      groupedByYear[year] = [];
    }
    groupedByYear[year].push(item);
  }

  const years = Object.keys(groupedByYear);
  years.sort((a, b) => b - a); // sort years in descending order

  const result = [];
  for (const year of years) {
    var isNullYear = year === "NaN" ? "unknown" : year;
    result.push({ year: isNullYear, movies: groupedByYear[year] });
  }

  return result;
};

const groupCrewByDepartment = (data) => {
  const groupedByDepartment = {};
  for (const item of data) {
    const department = item.department;
    const year =
      new Date(item?.release_date).getFullYear() ||
      new Date(item?.first_air_date).getFullYear();

    if (!groupedByDepartment[department]) {
      groupedByDepartment[department] = {};
    }
    if (!groupedByDepartment[department][year]) {
      groupedByDepartment[department][year] = [];
    }
    groupedByDepartment[department][year].push(item);
  }

  const departments = Object.keys(groupedByDepartment);
  departments.sort((a, b) => b - a); // sort departments in descending order

  const result = [];
  for (const department of departments) {
    const yearData = groupedByDepartment[department];
    const yearObject = [];
    for (const year in yearData) {
      yearObject.push({ year, movies: yearData[year] });
    }
    result.push({ department, by_year: yearObject });
  }
  return result;
};

export default PeopleHistory;
