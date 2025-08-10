// idea: step 3 - define routes accordingly mongoose.

//todo: Express :-
const express = require("express");
const app = express();

//--> Method Override
const methodOverride = require("method-override")
app.use(methodOverride("_method"))

//idea: path :-
const path = require("path");

//--> set views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// --> use public folder
app.use(express.static("public"));


//--> parse the res.body data of post request
app.use(express.urlencoded({ extended: true }));

//todo: Mongoose :-
const mongoose = require("mongoose");
const Chat = require("./models/chat");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(() => console.log("Connection Successful")).catch((err) => console.log(err))

//--> Chats route as root
app.get("/", async (req, res) => {
  try {
    let chats = await Chat.find().sort({ created_At: -1 });
    res.render("Chats.ejs", { chats });
  } catch (err) {
    console.log("Error fetching chats:", err);
    res.status(500).send("Error loading chats");
  }
});

//--> NewChat route
app.get("/newChat", (req, res) => {
  res.render("NewChat.ejs");
});

app.post("/", async (req, res) => {
  try {
    let { from, msg, to } = req.body;
    
    if (!from || !msg || !to) {
      return res.status(400).send("All fields are required");
    }
    
    let newChat = new Chat({
      from: from.trim(),
      msg: msg.trim(),
      to: to.trim(),
      created_At: new Date(),
    });
    
    await newChat.save();
    console.log("Chat was saved successfully");
    res.redirect("/");
  } catch (err) {
    console.log("Error saving chat:", err);
    res.status(500).send("Error saving chat");
  }
});

//--> EditChat route
app.get("/EditChats/:id/edit", async (req, res) => {
  try {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    
    if (!chat) {
      return res.status(404).send("Chat not found");
    }
    
    res.render("EditChat.ejs", {chat});
  } catch (err) {
    console.log("Error fetching chat for edit:", err);
    res.status(500).send("Error loading chat");
  }
});

app.put("/EditChats/:id", async(req, res) => {
  try {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    
    if (!newMsg || newMsg.trim() === "") {
      return res.status(400).send("Message cannot be empty");
    }
    
    await Chat.findByIdAndUpdate(id, {msg: newMsg.trim()}, {runValidators: true, new: true});
    res.redirect("/");
  } catch (err) {
    console.log("Error updating chat:", err);
    res.status(500).send("Error updating chat");
  }
});

//--> delete route  
app.delete("/delete/:id", async (req, res) => {
  try {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    
    if (!deletedChat) {
      return res.status(404).send("Chat not found");
    }
    
    res.redirect("/");
  } catch (err) {
    console.log("Error deleting chat:", err);
    res.status(500).send("Error deleting chat");
  }
});

app.listen("8080", () => {
  console.log("Server is listening on port 8080");
});