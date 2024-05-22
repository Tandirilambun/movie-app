import CardReview2 from "../components/fragments/CardReview_2";
const ReviewOverlay = ({ reviews, coba }) => {
  const closeReview = () => {
    document.getElementById("review-overlay").classList.remove("active");
    document.getElementById("review-overlay").classList.add("hidden");
  };

  return (
    <div
      id="review-overlay"
      className="hidden w-full h-full bg-black/50 z-[999] fixed top-0 left-0"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-black w-[1378px] h-fit rounded-xl px-5">
          <div className="flex justify-between py-3 px-5">
            <h1 className="text-white font-commissioner text-2xl">Reviews</h1>
            <div
              id="close-trailer"
              className="cursor-pointer"
              onClick={() => closeReview()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                className="fill-white"
              >
                <title>window-close</title>
                <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-end px-20">
            <button className="text-black flex items-center bg-cyan-400 py-1 px-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="black"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="ml-2">Add Review</p>
            </button>
          </div>
          <div className="h-[774px] hidden-scroll-vertical px-20 my-5">
            {reviews?.map((review, index) => {
              return (
                <CardReview2
                  key={index}
                  author={review.author_details}
                  content={review.content}
                  created_at={review.created_at}
                  updated_at={review.updated_at}
                ></CardReview2>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOverlay;
