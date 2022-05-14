// Initialize & Configure Server
const express = require("express");
const path = require("path");
const server = express();
const cors = require('cors')
server.use(express.json());
server.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:500000}));
server.use(cors());

// Import Controllers
const authController = require("./routes/authController");
const userController = require("./routes/userController");
const questionController = require("./routes/questionController");

// Configure Cors
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE', 'OPTIONS');
  res.header('Content-Type', 'application/json');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Headers",
  );
  next();
});

// Configure Routes
server.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

server.use("/api/auth", authController);
server.use("/api/user", userController);
server.use("/api/question", questionController);


// Listening 
server.listen("8101", function () {
  console.log("Server running");
});