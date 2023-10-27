import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDates";

const SingleBookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get("/data/bookings").then((response) => {
        const foundBooking = response.data.find((item) => item._id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }

  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
      <div className="bg-gray-200 p-6 mb-4 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl">Your booking information</h2>
          <BookingDates booking={booking} className="mb-2 mt-4 text-gray-500" />
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl"><div>Total Price:</div> <div className="text-3xl">${booking.price}</div> </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  );
};

export default SingleBookingPage;
