import { Fragment } from "react";
import { baseImgURL } from "../../../config";
import { Link } from "react-router-dom";

const CardMovie = ({
  children,
  id,
  media_type,
  size_link = "w-56",
  onmouseenter = () => {},
}) => {
  return (
    <Fragment>
      <Link to={`/${media_type}/${id}`} className={`${size_link} h-full group ease-in-out duration-500`} onMouseEnter={onmouseenter}>
        {children}
      </Link>
    </Fragment>
  );
};

const Image = ({ poster_path, title, size_img = "h-80",}) => {
  return (
    <img
      src={`${baseImgURL}w220_and_h330_face/${poster_path}`}
      alt={title}
      className={`ease-in-out duration-200 scale-100 w-full ${size_img} rounded-2xl mb-5 group-hover:ease-in-out group-hover:duration-100 group-hover:scale-110`}
      loading="lazy"
    />
  );
};

const Title = ({ title, font_size = "text-base"}) => {
  return (
    <p className={`font-montserrat text-white font-semibold ${font_size}`}>
      {title}
    </p>
  );
};
const Type = ({ type}) => {
  return (
    <p className={`font-montserrat text-gray-600 font-semibold first-letter:uppercase`}>
      {type}
    </p>
  );
};

const Footer = ({ rating, date_release }) => {
  return (
    <div className="flex justify-between mt-2">
      <p className="font-montserrat text-gray-600 font-semibold">
        {new Date(date_release).getFullYear()}
      </p>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="fill-yellow-500"
          viewBox="0 0 24 24"
        >
          <title>star</title>
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
        <p className="font-montserrat text-yellow-500 ml-1 font-semibold">
          {rating.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

CardMovie.Image = Image;
CardMovie.Title = Title;
CardMovie.Footer = Footer;
CardMovie.Type = Type;

export default CardMovie;
