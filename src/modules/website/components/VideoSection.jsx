const VideoSection = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 px-4 py-8 pt-40 lg:flex-row lg:px-20">
      {/* First Video Div */}
      <div className="flex items-center justify-center w-full p-4 bg-black rounded-lg lg:w-1/2 h-60">
        <video 
          src="/src/images/Solar Panels, Green Energy, Free Stock Footage.mp4" 
          controls 
          className="w-full h-full object-cover rounded-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Video Div */}
      <div className="flex items-center justify-center w-full p-4 bg-black rounded-lg lg:w-1/2 h-60">
        <video 
          src="/src/images/Solar Panels, Green Energy, Free Stock Footage.mp4" 
          controls 
          className="w-full h-full object-cover rounded-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
