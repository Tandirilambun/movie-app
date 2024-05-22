import CrewCard from "../components/fragments/CrewCard";

const CrewMovie = ({ crew }) => {
  const grouping = groupByDepartment(crew);
  return (
    <section className="mx-40 my-20 pb-20 border-b-[1px] border-[#2f2f2f]">
      <h1 className="text-white font-commissioner text-5xl mb-5 font-semibold">
        Cast
      </h1>
      {grouping.map((group, index) => {
        return (
          <div key={index}>
            <h2 className="text-white font-commissioner text-lg">
              {group.department} ({group.department.length})
            </h2>
            <div className="grid grid-cols-5">
              {group.people?.map((person, index) => {
                return <CrewCard key={index} person={person}></CrewCard>;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

const groupByDepartment = (data) => {
  const groupedByDepartment = {};
  for (const item of data) {
    const department = item.department;
    if (!groupedByDepartment[department]) {
      groupedByDepartment[department] = [];
    }
    groupedByDepartment[department].push(item);
  }

  const departments = Object.keys(groupedByDepartment);
  departments.sort((a, b) => b - a);

  const result = [];
  for (const department of departments) {
    result.push({ department, people: groupedByDepartment[department] });
  }
  return result;
};

export default CrewMovie;
