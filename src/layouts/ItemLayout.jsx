const FilterLayout = () => {
  return (
    <aside className="bg-white w-1/4 h-full p-5">
      <div className="border-[1px] rounded-xl">
        <h1 className="mx-4 my-[14px] font-commissioner font-bold">Sort</h1>
        <hr />
        <div className="mx-4 my-[14px]">
            <p className="mb-2 font-montserrat">Sorted Result By</p>
            <select name="" id="" className="w-full p-3 font-commissioner bg-gray-300 rounded-xl sort-item focus:outline-none">
                <option selected value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="primary_release_date.desc">Release Date Descending</option>
                <option value="primary_release_date.asc">Release Date Ascending</option>
                <option value="title.desc">Title [A-Z]</option>
                <option value="title.asc">Title [Z-A]</option>
            </select>
        </div>
      </div>
    </aside>
  );
};

export default FilterLayout;
