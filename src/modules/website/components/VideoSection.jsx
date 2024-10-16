const VideoSection = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 px-4 py-8 pt-40 lg:flex-row lg:px-20">
      {/* First Video Div */}
      <div className="flex items-center justify-center w-full p-4 bg-black rounded-lg lg:w-1/2 h-60">
        <p className="text-center text-white">Video 1</p>
      </div>

      {/* Second Video Div */}
      <div className="flex items-center justify-center w-full p-4 bg-black rounded-lg lg:w-1/2 h-60">
        <p className="text-center text-white">Video 2</p>
      </div>
    </section>
  );
};

export default VideoSection;