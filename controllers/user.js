let dataUser = [
  { id: 1, name: "iqbal", email: "iqbal@gmail.com" },
  { id: 2, name: "baihaqi", email: "baihaqi@yahoo.com" },
  { id: 3, name: "abdullah", email: "abdullah@gmail.com" },
];

module.exports = {
  index: (request, response) => {
    if (dataUser.length !== 0) {
      response.json({
        status: true,
        code_status: 200,
        data: dataUser,
        method: request.method,
        url: request.url,
      });
    } else {
      response.json({
        status: false,
        code_status: 200,
        message: "Data user kosong",
        data: dataUser,
        method: request.method,
        url: request.url,
      });
    }
  },
  store: (request, response) => {
    dataUser.push(request.body);
    response.send({
      status: true,
      message: "user berhasil ditambahkan",
      data: dataUser,
      method: request.method,
      url: request.url,
    });
  },
  update: (request, response) => {
    dataUser.filter((user) => {
      if (user.id == request.params.userId) {
        user.id = Number(request.params.userId);
        user.name = request.body.name;
        user.email = request.body.email;
  
        return user;
      }
    });
  
    response.json({
      status: true,
      message: "Updated",
      code: 200,
      data: dataUser,
      method: request.method,
      url: request.url,
    });
  },
  delete: (request, response) => {
    dataUser = dataUser.filter((user) => user.id != request.params.userId);
    response.send({
      status: true,
      message: "User berhasil dihapus",
      data: dataUser,
      method: request.method,
      url: request.url,
    });
  }
};
