const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[50%] sm:pt-[40%] md:pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg  md:w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-6 md:px-10 text-lg md:text-xl hover:bg-opacity-80 rounded-lg"> Play</button>
        <button className="mx-4 bg-gray-500 text-white p-2 px-6 md:px-10 text-lg md:text-xl bg-opacity-80 hover:bg-opacity-50 rounded-lg"> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;