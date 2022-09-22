import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import EditComment from "../pages/EditComment";
import PlayerPage from "../pages/PlayerPage";
import { Routes, Route, Outlet } from "react-router-dom";

export default function Main({ signup, isLoggedIn, login, user }) {
  //console.log(signup);
  return (
    <div className="Main">
      <Outlet />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route path="/register" element={<RegisterPage signUp={signup} />} />
        <Route path="/comment/:id" element={<EditComment />} />
        <Route path="/test/profile/:id" element={<PlayerPage />} />
      </Routes>
    </div>
  );
}
