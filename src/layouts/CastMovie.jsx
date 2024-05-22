import { useState, useEffect } from "react";
import CastCard from "../components/fragments/CastCard";
import ReactPaginate from "react-paginate";
import Chevron from "../../public/icon/chevron.svg";
const CastMovie = ({ cast }) => {
  const [actor, setActor] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage] = useState(10);

  const endOffset = (currentPage + 1) * itemPerPage;
  const firstOffset = endOffset - itemPerPage;

  const currentItem = actor?.slice(firstOffset, endOffset);

  const pageCount = Math.ceil(actor?.length / itemPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    setActor(cast);
  }, [currentPage]);
  return (
    <section className="mx-40 pb-20 border-b-[1px] border-[#2f2f2f]">
      <h1 className="text-white font-commissioner text-5xl mb-5 font-semibold">
        Cast
      </h1>
      <div className="grid grid-cols-5 gap-4">
        {currentItem?.map((person) => {
          return <CastCard key={person.id} person={person} />;
        })}
      </div>
      <div className="flex justify-center mt-10">
        <ReactPaginate
          className="pagination text-white flex justify-center items-center gap-x-4 h-12 px-10 font-commissioner rounded-full bg-slate-950"
          breakLabel="..."
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          }
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          }
          onPageChange={handlePageClick}
          pageCount={pageCount}
          activeClassName={"active ease-in-out duration-300 scale-150 text-red-500 font-bold"}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          pageClassName="flex justify-center items-center rounded-lg ease-in-out duration-300 px-2 "
          previousClassName="mr-10 bg-red-500 p-1 rounded-full"
          nextClassName="ml-10 bg-red-500 p-1 rounded-full"
          disabledClassName="cursor-not-allowed bg-gray-500"
        ></ReactPaginate>
      </div>
    </section>
  );
};

export default CastMovie;
