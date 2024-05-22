const Biography = ({ bio }) => {
  return (
    <section className="mb-5 pt-20 pb-10 px-10 ">
      <div>
        <h1 className="text-5xl font-bold text-white font-commissioner mb-10">
          {bio.name}
        </h1>
        <div className="text-white font-commissioner ">
          <h2 className="text-2xl mb-2 font-semibold">Biography</h2>
          <Overview paragraph={bio.biography} />
        </div>
      </div>
    </section>
  );
};

const Overview = ({ paragraph }) => {
  const bio = paragraph?.split("\n").map((line, index) => (
    <p className="mb-3 text-sm" key={index}>
      {line}
    </p>
  ));
  return bio;
};

export default Biography;
