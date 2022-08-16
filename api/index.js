const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");


const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {origin: "*",credentials: true} });

let onlineUsers =[];


const addNewUser = (user,socketId) => {
  onlineUsers.push({user,socketId})
}
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user)=>user.socketId !== socketId)
}

io.on("connection",(socket)=> {
  socket.on("display_user",(data)=> {
    console.log(data);
    console.log("User "+data._id+" is connected !" + socket.id)
    addNewUser(data.id,socket.id)
  })
  
  socket.on("disconnect",()=> {
    removeUser(socket.id)
    io.close()
  })

  socket.on("admin_conn",()=>{
    console.log(onlineUsers);
    io.emit("admin",{onlineUsers})
  })
})

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);



httpServer.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running on Port: ${process.env.PORT}`);
});

