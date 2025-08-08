import "./TopBar.css";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-teal-600 font-semibold underline"
                  : "text-gray-700 hover:text-teal-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/write"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-600 font-semibold underline"
                  : "text-gray-700 hover:text-teal-600"
              }
            >
              Write
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-600 font-semibold underline"
                  : "text-gray-700 hover:text-teal-600"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-600 font-semibold underline"
                  : "text-gray-700 hover:text-teal-600"
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="SearchIcon fa-solid fa-magnifying-glass"></i>
        <img
          className="topImg"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
      </div>
    </div>
  );
}
