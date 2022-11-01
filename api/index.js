const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuario = {
  nombre: "",
  apellido: "",
};

let respuesta = {
  error: false,
  codigo: 200,
  mensaje: "",
};

app.get("/", function (req, res) {
  respuesta = {
    error: true,
    codigo: 200,
    mensaje: "Punto de Inicio",
  };
  res.send(respuesta);
});
app.get("/usuario", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "respuesta de usuario",
    respuesta: usuario,
  };

  if (usuario.nombre === "" || usuario.apellido === "") {
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "",
    };
  }
  res.send(respuesta);
});

app.post("/usuario", function (req, res) {
  usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
  };
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Usuario creado",
    respuesta: usuario,
  };

  if (!req.body.nombre || !req.body.apellido) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre y apellido son requeridos",
    };
  } else {
    if (usuario.nombre !== "" || usuario.apellido !== "") {
      respuesta = {
        error: true,
        codigo: 503,
        mensaje: "El usuario ya fue creado previamente",
      };
    }
  }
  res.send(respuesta);
});
app.put("/usuario", function (req, res) {
  usuario = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
  };
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Usuario actualizado",
    respuesta: usuario,
  };
  if (!req.body.nombre || !req.body.apellido) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre y apellido son requeridos",
    };
  } else {
    if (usuario.nombre === "" || usuario.apellido === "") {
      respuesta = {
        error: true,
        codigo: 501,
        mensaje: "El usuario no ha sido creado",
      };
    }
  }
  res.send(respuesta);
});

app.delete("/usuario", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Usuario eliminado",
  };
  usuario = {
    nombre: "",
    apellido: "",
  };
  if (usuario.nombre === "" || usuario.apellido === "") {
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: "El usuario no ha sido creado",
    };
  }
  res.send(respuesta);
});
app.use(function (req, res, next) {
  respuesta = {
    error: true,
    codigo: 404,
    mensaje: "URL no encontrada",
  };
  res.status(404).send(respuesta);
});
app.listen(3000, () => {
  console.log("El servidor esta inicializado en el puerto 3000");
});
