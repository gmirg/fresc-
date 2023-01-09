const conexion = require("../dataBases/mysql")
const Sequelize = require("sequelize")
const Users = require("../models/user.model")
const bcyptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
// const sendemail = require("./email.controllers");
// const conexion =require("./databases/mysql")
// const Op = Sequelize.Op;


const user = {
  
  /**
   * Funcion que comprueba email y contraseña de usuario para iniciar sesion, no me dio tiempo amanejar JWT y cookies
   * @param {json} req 
   * @param {json} res 
   */
  login: async (req, res) => {
    // try {
    //   // var con = await conexion.abrir();
    var con = await conexion.abrir();
    const usr = await Users.create(con);
    const { email, pass } = req.body;
    const user = await usr.findOne({ where: { email } });
    console.log (user)
    if (user && user.pass === pass ) {  
      res.json({
        validation : true,
        user :user.id
      })
      
    } else {
      res.json({
        validation : false,
      })
    }
    //   if (user) {
    //     // let hashSaved = user.dataValues.pass;
    //     // let compare = bcyptjs.compareSync(pass, hashSaved);
    //     // const infoJwt = jwt.sign({ email, "id": user.dataValues.id, "full_name":user.dataValues.full_name }, process.env.TOKEN_SECRET);
    //     res.json({
    //       validation: true,
    //       user: user.dataValues
    //     });
    //   } else {
    //     res.json({
    //       validation: false,
    //       message: "no existe el usuario"
    //     });
    //   }

    // } catch (error) {
    //   res.json(error)

    // } finally {
    //   await conexion.cerrar(con);
    // }


  }

}

module.exports = user;