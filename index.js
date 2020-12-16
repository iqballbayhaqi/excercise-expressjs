const { request, response } = require("express");
const express = require("express");
const app = express();
const userRouter = require('./route/user')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs')

// create middleware
let isLogin = (request, response, next) => {
  console.log("LOGGED");
  request.tanggal = new Date()
  next()
}

app.use(isLogin)

app.get("/", (request, response) => {
  // response.send({ data: `Hello World!, sekarang tanggal ${request.tanggal}` });
  response.render('pages/index', {tanggal: request.tanggal})
});

app.get("/about", (request, response) => {
  response.send({ data: `Hello World About!, sekarang tanggal ${request.tanggal}` });
});

app.use(userRouter)

app.listen(3000, () => {
  console.log("Server sedang berjalan");
});
