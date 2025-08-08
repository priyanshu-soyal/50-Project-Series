import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/SideBar/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  );
}
