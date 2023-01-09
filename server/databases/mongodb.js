const mongoose = require("mongoose");

connection = {
    open: async () => {

        const url = "mongodb://localhost:27017/frescoo";
        
        console.log("Conectado a la base de datos");
        
        return await mongoose.connect(url);

    },
    close: async () => {
        await mongoose.disconnect();
        console.log("Desconectado de la base de datos");
    }
}


module.exports = connection;