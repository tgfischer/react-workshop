const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");
const cors = require("cors");

const menu = require("./routes/menu");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/menu", menu);

module.exports.handler = serverless(app);
