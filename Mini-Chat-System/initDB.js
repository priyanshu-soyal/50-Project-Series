//idea: step 2 - we create a connection with the database and insert data .

//todo: Mongoose :-
const mongoose = require("mongoose");

// idea: chat.js models require
const Chat = require("./models/chat")

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then((res) => console.log("Connection Succesfull"))
  .catch((err) => console.log(err));

// idea: insert single data :-
// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheet",
//     created_At: new Date()
// })

// chat1.save()
// .then(res => console.log(res))
// .catch(err => console.log(err))

//idea: insert multiple data as raw data :-
let chats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheet",
    created_At: new Date(),
  },
  {
    from: "saloni",
    to: "neha",
    msg: "send me B.A exam paper's",
    created_At: new Date(),
  },
  {
    from: "saurab",
    to: "salu",
    msg: "phone charge kr de",
    created_At: new Date(),
  },
];

Chat.insertMany(chats)
.then(res => console.log(res))
.catch(err => console.log(err))
