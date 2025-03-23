import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all ${
        user ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        onClick={() => navigate("/")}
        className={`cursor-pointer text-5xl font-volkhov font-extrabold ${
          user ? "text-black" : "text-white"
        }`}
      >
        PAWPAL
      </div>

      {user ? (
        <div className="flex items-center space-x-4">
          <span className="font-volkhov hidden md:block">
            HELLO, {user.name.toUpperCase()}!
          </span>
          <img
            src={user.profileImage || "/defaultUser.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-black"
          />
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-2xl"
          >
            {isDropdownOpen ? "▲" : "▼"}
          </button>
          {isDropdownOpen && (
            <div className="absolute top-16 right-8 bg-white shadow-lg rounded-lg py-2 px-4">
              <button
                onClick={logout}
                className="block font-volkhov text-black py-1 hover:underline"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white py-2 px-4 rounded-full font-volkhov hover:bg-gray-800 transition duration-300"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-gray-300 text-black py-2 px-4 rounded-full font-volkhov hover:bg-gray-400 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
