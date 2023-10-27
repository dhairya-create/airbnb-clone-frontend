import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

const SinglePlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/data/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);



  return (
    <div className="mt-4 -mx-8 px-8 pt-8 bg-gray-100">
      <h1 className="text-3xl">{place.title}</h1>
    <AddressLink >{place.address}</AddressLink>
      
      <PlaceGallery place={place} />

      <div className=" mt-8 mb-8 gap-8 grid grid-cols-2">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn} <br />
          Check-out: {place.checkOut} <br />
          Max number of guests: {place.maxGuests}
          
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
      <div>
      <h2 className="mt-4 font-semibold text-2xl">Extra Info</h2>
      </div>
      <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
            {place.extraInfo}
          </div>

      </div>
      
    </div>
  );
};

export default SinglePlacePage;
