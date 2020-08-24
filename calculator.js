//jshint esversion:6

const express = require("express");

//requireing a body parser
const bodyParse = require("body-parser");

const app = express();

//bosy parser allows u to
app.use(bodyParse.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.send("<h1>Hello World!!!</h1>");
});
//getting response
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calculator.html");
});
// app.post("/", function (req, res) {
//   var num1 = Number(req.body.n1);
//   var num2 = Number(req.body.n2);
//   var result = num1 + num2;
//   console.log(req.body.num1);
//   res.send("Your calculated result is " + result);
// });
app.post("/", function (req, res) {
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var results = w / (h * h);
  res.send("Your BMI result is " + results);
});
app.listen(3000, function () {
  console.log("Now Listening");
});
