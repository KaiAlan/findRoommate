const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//middlewares
app.use(express.json());
app.use(cookieParser());

const isAuthenticated = async (req, res, next) => {
  const token = jwt.sign(req.cookies.toString(), "abcdegf");
  if (!token) {
    res.send("Error");
  }
  try {
    const decoded = jwt.verify(token, "abcdegf");
    req.user = await usersModel.findOne(decoded._id);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Invalid Token" });
  }
};
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "findRoommate",
  })
  .then(() => console.log("database connected."))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  emailid: String,
  password: String,
});

const usersModel = mongoose.model("users", userSchema);

//routes
app.get("/", isAuthenticated, (req, res) => {
  console.log("this is homepage");
  res.send("Success");
});

app.get("/logout", isAuthenticated, (req, res) => {
  console.log("this is logout route.");
  res.cookie("token", "", {
    httpOnly: true,
    expiresIn: new Date(Date.now()),
  });
  res.status(200).json({ message: "User Logout Successfully" });
});

app.post("/login", async (req, res) => {
  console.log("this is login route");
  const { emailid, password } = req.body;
  const user = await usersModel.findOne({ emailid: { $eq: req.body.email } });
  if (!user) {
    res.send("Please register first");
  } else {
    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordValid) {
      const token = jwt.sign({ _id: user._id }, "abcdegf");
      res.cookie("token", token, {
        httpOnly: true,
      });
      res.send(`Logged in successfully for ${req.body.email}.`).status(200);
    } else {
      res.send("Incorrect password").status(401);
    }
  }
});
app.post("/signup", async (req, res) => {
  console.log("this is signup route");
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    await usersModel.create({
      emailid: req.body.email,
      password: hashedPassword,
    });
    res.status(201).send("Success");
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = app;
