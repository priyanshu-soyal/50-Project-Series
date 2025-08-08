import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://plus.unsplash.com/premium_photo-1671658221372-4dedc40c32a1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className="siglePostTitle">
          <h2>Single Post Title.</h2>
          <div className="singlePostEdit">
            <i className="siglePostIcon fa-solid fa-pen-to-square"></i>
            <i className="siglePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <p>Author : <b>Priyanshu soyal</b> </p>
          <p>1 hour ago</p>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, temporibus molestias voluptatum asperiores deleniti debitis corrupti officia fuga cupiditate. Vero amet ea ducimus libero odit ut. Sapiente corrupti harum tempora.
        </p>
      </div>
    </div>
  );
}
