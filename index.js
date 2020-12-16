const express = require("express");
const app = express();
const userRouter = require('./route/user')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", (request, response) => {
  response.send({ hai: "Hello World!" });
});

app.use(userRouter)

app.listen(3000, () => {
  console.log("Server sedang berjalan");
});
