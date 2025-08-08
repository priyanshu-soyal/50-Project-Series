import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h1>About Me</h1>
        <img
          src="https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
          recusandae nihil saepe reiciendis, rem similique natus culpa doloribus
          vitae voluptates quam, nam explicabo beatae?
        </p>
      </div>
      <div className="sidebarItem">
        <span>CATEGORIES</span>
        <ul className="sidebarList">
          <li>Life</li>
          <li>Music</li>
          <li>Style</li>
          <li>Sport</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span>FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </div>
  );
}
