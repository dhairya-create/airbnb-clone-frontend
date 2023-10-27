import {React,useState} from "react";

const PlaceGallery = ({place}) => {
//   const [place, setPlace] = useState("");
  const [showAllPhotos, setShowAllPhotos] = useState(false);


  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className=" bg-black p-8 grid gap-2">
          <div>
            <h2 className="text-3xl mb-2 mr-32">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className=" p-2 right-12 top-8 gap-2 flex bg-transparent hover:bg-red-600 hover:text-white fixed rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Close Photos</span>
            </button>
          </div>
          {place?.photos?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {place.photos.map((photo) => (
               
                <div className="flex items-center justify-center aspect-square">
                  <img
                    className="object-cover"
                    src={photo}
                    alt="Photo"
                  />
                </div>
                
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square cursor-pointer object-cover max-h-90"
                src={place.photos[0]}
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square cursor-pointer object-cover"
              src={place.photos[1]}
            />
          )}

          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square cursor-pointer object-cover relative top-2"
                src={place.photos[2]}
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute bottom-2 right-2 px-2 py-4 bg-white rounded-2xl  shadow-md shadow-black"
      >
        Show more photos
      </button>
    </div>
  );
};

export default PlaceGallery;
