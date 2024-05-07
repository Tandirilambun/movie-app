import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [showBar, setShowBar] = useState(false);
  const Bar = () => {
    setShowBar(!showBar);
  };
  return (
    <header className="fixed top-0 left-0 w-full flex items-center z-10 py-5 border-b-[0.5px] border-white bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-white py-4 lg:py-0">
        <div className="relative flex items-center justify-between">
          <div>
            <img src="/icon/title-logo.png" alt="" className="h-10" />
          </div>
          <div>
            <ul className="flex gap-x-40">
              <li className="group">
                <Link to="/" className="font-commissioner text-lg">
                  Home
                </Link>
              </li>
              <li className="group">
                <a href="#" className="font-commissioner text-lg">
                  Movie
                </a>
              </li>
              <li className="group">
                <a href="#" className="font-commissioner text-lg">
                  TV Series
                </a>
              </li>
            </ul>
          </div>
          <div id="search-section" className="flex gap-x-2">
            <button
              type="button"
              className={`${
                showBar ? "show" : "hide"
              } bg-[#d2d2d2] rounded-full h-fit self-center`}
                onClick={Bar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                className="fill-black"
              >
                <title>close</title>
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
            <input
              id="search-bar"
              type="search"
              name="search"
              placeholder="Search"
              className={`${
                showBar ? "show" : "hide"
              } focus: outline-none text-white py-2 w-60 px-5 rounded-full bg-[#d2d2d2]`}
            />
            <button
              id="search-btn"
              className="self-center bg-red-500 p-2 rounded-full"
              onClick={Bar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-white"
              >
                <title>magnify</title>
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
