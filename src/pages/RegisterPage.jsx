import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/users/register", {
        name,
        email,
        password,
      });

      // Show a success toast
      toast.success('User registration successful');
    } catch (error) {
      // Handle API call error
      console.error('Registration failed:', error);
      // Show an error toast
      toast.error('User registration failed');
    }
  }
  return (
    <div className="grow flex items-center justify-around">
      <div className="">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto  mt-1" onSubmit={registerUser}>
          <input
            type="text"
            placeholder={"John Mayer"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder={"your@email.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="primary">Register</button>
          <ToastContainer />
          <div className="text-center p-2 text-gray-500">
            Already a member?
            <Link className="underline text-black" to={"/login"}>
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
