import Sidebar from "../../Components/SideBar/Sidebar";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <h3 className="upadte">Update account</h3>
          <h3 className="delete">Delete account</h3>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile picture</label>
          <div className="settingsPP">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <label htmlFor="settingsFileInput">
              <i className="settingsUserIcon fa-regular fa-circle-user"></i>
            </label>
          </div>

          <input
            type="file"
            name=""
            id="settingsFileInput"
            style={{ display: "none" }}
          />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="priyanshu" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="priyanshu" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="priyanshu" />
          <button className="settingsBtn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
