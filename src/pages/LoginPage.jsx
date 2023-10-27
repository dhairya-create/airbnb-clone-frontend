import { React, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../UserContext";

import { Slide, Zoom, Flip, Bounce } from 'react-toastify';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const userInfo = await axios.post("/users/login", { email, password });

      setUser(userInfo.data);
      // Show a success toast

      toast.success("Login Successful");
      setRedirect(true);
    } catch (error) {
      // Handle API call error
      console.error("Login failed:", error);
      // Show an error toast
      toast.error("Login failed");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="primary">Login</button>
          <ToastContainer  transition={Zoom} />

          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text-black font-bold" to="/register">
              Register
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
