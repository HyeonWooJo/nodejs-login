"use strict";

// module
const express = require("express");
const app = express();

// router
const home = require('./src/routes/home');

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", 'ejs');

app.use('/', home); // use -> middleware를 등록해주는 메서드

module.exports = app;






















