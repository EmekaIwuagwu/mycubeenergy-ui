const ImageSection = () => {
  return (
    <section className="px-4 py-8 lg:px-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Our Services in Pictures</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {/* Image 1 */}
        <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="Solar Panels"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
          <img
            src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg"
            alt="Solar Panels"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
          <img
            src="https://cdn.pixabay.com/photo/2015/03/26/09/54/solar-panel-690041_960_720.jpg"
            alt="Solar Panels"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
          <img
            src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759"
            alt="Solar Farm"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
