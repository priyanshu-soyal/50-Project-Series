// --> require express
const express = require("express");
const app = express();

// --> require path
const path = require("path");
// --> view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

// parse data :-
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// --> require ejs-mate
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

// mongoose
const mongoose = require("mongoose");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog");
}
main()
    .then(() => {
        console.log("MongoDB Connect");
    })
    .catch((err) => {
        console.log(err);
    });

//   require --> 
const posts = require("./models/posts");
const Post = require("./models/posts");

// Routes :-
app.get("/", async(req, res) => {
    const allPost  = await posts.find({});
        res.render("components/home.ejs", {allPost});
});

app.get("/blog/:id", async (req, res) => {
    let {id} = req.params;
    const post = await Post.findById(id);
    res.render("components/show.ejs", {post})
});

app.get("/newPost", (req, res) => {
    res.render("components/newPost.ejs")
})

app.post("/", async(req,res) => {
    let {title, author, content, imageUrl, tags} = req.body;
    let post = {title, author, content, imageUrl, tags};
    const newPost = new Post(post);
    await newPost.save();
    res.redirect("/");
})

let port = 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
