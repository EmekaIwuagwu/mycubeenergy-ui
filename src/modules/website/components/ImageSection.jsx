const ImageSection = () => {
    return (
      <section className="px-4 py-8 lg:px-20">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Services in Pictures</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Image 1 */}
          <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
            <img
              src="/assets/images/image1.jpg"
              alt="Service 1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
  
          {/* Image 2 */}
          <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
            <img
              src="/assets/images/image2.jpg"
              alt="Service 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
  
          {/* Image 3 */}
          <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
            <img
              src="/assets/images/image3.jpg"
              alt="Service 3"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
  
          {/* Image 4 */}
          <div className="flex items-center justify-center w-full bg-gray-200 rounded-lg h-60">
            <img
              src="/assets/images/image4.jpg"
              alt="Service 4"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ImageSection;
  