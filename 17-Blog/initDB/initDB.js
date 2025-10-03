const mongoose = require("mongoose");
const postData = require("./data");
const Post = require("../models/posts");

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

const initDB = async() => {
    await Post.deleteMany({});
    await Post.insertMany(postData.data)
    console.log("Data was initialized")
}
initDB();
