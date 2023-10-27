import React, { useContext, useState,useEffect } from "react";
import { differenceInCalendarDays } from "date-fns";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect,setRedirect] = useState("")

  const {user} = useContext(UserContext)

  useEffect(() => {
    if(user){
      setName(user.name)
    }
  },[user])

  let numberOfNights = 0;

  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookPlace() {
    const response = await axios.post("/data/add-booking", {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      price: numberOfNights * place.price,
      place: place._id,
    });

    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`)

  }

  if(redirect){
    return <Navigate to={redirect} />
  }
  return (
    <div className="bg-white shadow-md p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price : ${place.price} / per night
      </div>

      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4 ">
            <label>Check in: </label>
            <input
              type="date"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out: </label>
            <input
              type="date"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests </label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(ev) => setNumberOfGuests(ev.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />

            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
            {/* 
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            /> */}
          </div>
        )}
      </div>

      <button onClick={bookPlace} className="primary mt-4">
        Book this place{" "}
        {numberOfNights > 0 && (
          <span className=""> for ${numberOfNights * place.price}</span>
        )}
      </button>
    </div>
  );
};

export default BookingWidget;
