const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');

//middlewares
app.use(express.json());
app.use(cookieParser());

const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decoded = jwt.verify(token, "abcdegf");
        // console.log(decoded);
        req.user = await usersModel.findOne(decoded._id);
        next();
    }
    else {
        res.redirect("/login");
    }

}
mongoose.
    connect("mongodb://127.0.0.1:27017", {
        dbName: "findRoommate"
    })
    .then(() => console.log("database connected."))
    .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
    emailid: String,
    password: String
});

const usersModel = mongoose.model("users", userSchema);

//routes
app.get("/", isAuthenticated, (req, res) => {
    console.log("this is homepage");
    res.send("Success");
});


app.get("/logout",isAuthenticated, (req, res) => {
    console.log("this is logout route.");
    res.cookie("token", null, {
        httpOnly: true, expires: new Date(Date.now())
    });
    res.send("logged out");
});


app.post("/login", async (req, res) => {
    console.log("this is login route");
    const { emailid, password } = req.body;
    const user = await usersModel.findOne({emailid:{$eq:req.body.email}});
    if(!user){
        res.send("Please register first");
    }
    else {
        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordValid) {
            const token = jwt.sign({ _id: user._id }, "abcdegf");
            res.cookie("token", token, {
                httpOnly: true
            });
            res.send(`Logged in successfully for ${req.body.email}.`).status(200);
        } else {
            res.send("Incorrect password").status(401);
        }
    }
});
app.post("/signup", async (req, res) => {
    console.log("this is signup route");
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    try {
        await usersModel.create({
            "emailid": req.body.email,
            "password": hashedPassword
        });
        res.status(201).send("Success");
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = app;