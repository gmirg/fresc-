const express = require("express")
const router = require("./routes/routes");
// const cors = require("cors");
// const cookieParser = require('cookie-parser');
const app = express();

// middlewares de express utilizados
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Rutas

app.use("/", router);

// Modelos
const User = require('./models/User.model')

// inicialización
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://127.0.0.1:${port}`);
});