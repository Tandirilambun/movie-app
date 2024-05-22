import { baseImgURL } from "../../config";
const PeopleBio = ({ people, cast }) => {
  const gender = ["Not set/Not Specified", "Female", "Male", "Non-Binary"];
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const birthday = new Date(people.birthday).toLocaleString("us-US", options);
  const old =
    new Date().getFullYear() - new Date(people.birthday).getFullYear();
  return (
    <section className="py-20 px-10 sticky">
      <div>
        <div className="flex justify-center">
          <img
            src={`${baseImgURL}original/${people.profile_path}`}
            alt=""
            className="h-[35rem] rounded-2xl"
          />
        </div>
        <article className="text-white font-commissioner mx-5 my-10">
          <h2 className="text-2xl mb-5 font-bold">Personal Info</h2>
          <div className="mb-5 text-lg">
            <h3 className="font-semibold text-sm">Known For</h3>
            <p>{people.known_for_department}</p>
          </div>
          <div className="mb-5 text-lg">
            <h3 className="font-semibold text-sm">Known Credit</h3>
            <p>{cast}</p>
          </div>
          <div className="mb-5 text-lg">
            <h3 className="font-semibold text-sm">Gender</h3>
            <p>{gender[people.gender]}</p>
          </div>
          <div className="mb-5 text-lg">
            <h3 className="font-semibold text-sm">Birthday</h3>
            <p>
              {birthday} ({old} years old)
            </p>
          </div>
          <div className="mb-5 text-lg">
            <h3 className="font-semibold text-sm">Place Of Birth</h3>
            <p>{people.place_of_birth}</p>
          </div>
          <div className="mb-5 text-lg">
            <h3 className="font-semibold text-sm">Also Known As</h3>
            {people.also_known_as?.map((aka, index) => {
              return <p key={index}>&bull; {aka}</p>;
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default PeopleBio;
