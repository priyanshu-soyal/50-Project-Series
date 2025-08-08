import "./Post.css";
import { Link } from 'react-router-dom';

export default function Post() {
  return (
      <div className="post">
        <img
          src="https://plus.unsplash.com/premium_photo-1671658221372-4dedc40c32a1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="post"
        />
        <div className="postInfo">
        <div className="postCats">
            <h3>Life</h3>
            <h3>Travel</h3>
        </div>
        <Link to="/post/abc" className="link">
          <h2 className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </Link>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis numquam ipsum facere. Amet sed reprehenderit, doloremque unde veritatis quas excepturi vero in sapiente recusandae assumenda delectus quam dolor placeat distinctio harum rem voluptatibus esse ab deleniti dolore repellendus.
      </p>
      </div>
  );
}
