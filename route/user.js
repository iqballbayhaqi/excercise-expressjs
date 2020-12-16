const express = require('express')
const router = express.Router()

const dataUser = [
  {id: 1, name: 'iqbal', email: "iqbal@gmail.com"},
  {id: 2, name: 'baihaqi', email: "baihaqi@yahoo.com"},
  {id: 3, name: 'abdullah', email: "abdullah@gmail.com"}
]

router.route("/user")
.get((request, response) => {
  response.json({status: "Success", code_status: 200, data: dataUser});
})
.post((request, response) => {
  dataUser.push(request.body)
  response.send({ status: "user berhasil ditambahkan", data: dataUser});
});

router.put("/user/:userId", (request, response) => {
  dataUser.filter(user => {
    if (user.id == request.params.userId){
      user.id = Number(request.params.userId)
      user.name = request.body.name
      user.email = request.body.email

      return user
    }
  })

  response.json({status: "Updated", code: 200, data: dataUser})
});

router.delete("/user", (request, response) => {
response.send({ data: "User berhasil dihapus" });
});

module.exports = router