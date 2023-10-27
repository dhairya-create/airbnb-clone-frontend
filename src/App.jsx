import { Link } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import Layout from "./components/Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import SinglePlacePage from "./pages/SinglePlacePage";
import BookingsPage from "./pages/BookingsPage";
import SingleBookingPage from "./pages/SingleBookingPage";

axios.defaults.baseURL = "https://airbnb-clone-backend-f7f9.onrender.com";
axios.defaults.withCredentials = true;
function App() {
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route index element={<IndexPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />  
          <Route path="/account/places/:id" element={<PlacesFormPage />} />  
          <Route path="/place/:id" element={<SinglePlacePage />}/>
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<SingleBookingPage />} />
          
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
