import CardReview from "../components/fragments/CardReview";
import { Link } from "react-router-dom";
const Reviews = ({ reviews, item_id }) => {
  return (
    <section className="py-12 mx-20 px-5">
      <div className="h-full">
        <h1 className="font-commissioner  text-white text-3xl font-bold">
          Reviews ({reviews.length})
        </h1>
        <div className="my-5">
          <ReviewItem reviews={reviews[reviews.length - 1]} itemId={item_id} />
        </div>
      </div>
    </section>
  );
};

const ReviewItem = ({ reviews, itemId }) => {
  if (reviews) {
    return (
      <div className="w-full pe-1 mb-5">
        <CardReview
          key={reviews.id}
          author={reviews.author_details}
          content={reviews.content}
          created_at={reviews.created_at}
          updated_at={reviews.updated_at}
        ></CardReview>
        <div className="flex justify-end w-full ">
          <Link
            to={`/${itemId}/reviews`}
            className="border-[1px] border-[#2f2f2f] rounded-xl text-white p-4 flex ease-in-out duration-200 scale-100 hover:scale-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-white"
              >
                <title>arrow-right</title>
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            </span>
            <p> Read all reviews</p>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="font-commissioner text-white text-center text-2xl">
        No reviews
      </h1>
    );
  }
};

export default Reviews;
