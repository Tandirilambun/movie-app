const TrailerCard = ({ video, onclick = () => {}}) => {
  return (
    <>
      <div
        className="w-[30rem] h-[17rem] bg-white bg-cover bg-center flex justify-center items-center trailer-card scale-100 ease-in-out duration-200 rounded-lg"
        style={{
          backgroundImage: `url(https://i.ytimg.com/vi/${video}/hqdefault.jpg)`,
        }}
      >
        <div
          className="play-btn bg-black bg-opacity-50 p-3 rounded-full cursor-pointer scale-100 ease-in-out duration-200 hover:scale-125 hover:ease-in-out hover:duration-200"
          onClick={onclick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-white"
          >
            <title>play</title>
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default TrailerCard;
