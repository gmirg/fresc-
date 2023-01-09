const express = require("express");
const conn = require("./databases/mongodb")
const routes = require("./routes/routes")
const app = express();
const cors = require ("cors")
const con =require("./databases/mysql")
// import User from './models/User.model';
// const router = require("express").Router();
// const cors = require("cors");
// const cookieParser = require('cookie-parser');
// middlewares de express utilizados
// app.use(urlencoded({extended: false}));
// app.use(json());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Rutas
app.use("/", routes);

// Modelos

// inicialización
const port = 5000;
conn.open()
// con.abrir()


app.listen(port, () => {
    console.log(`Servidor iniciado en http://127.0.0.1:${port}`);
});