const connection = require("../config/sqlConnection");
const bcrypt = require('bcryptjs')
 const metodoGetUsuario =  (req,res) =>{
let {email,password} = req.body.usuario
  


        if(email&&password){
              connection.query(
                'SELECT idUsuario,nombre,apellido,alias,password FROM usuarios WHERE mail = ?  AND activo = 1'  ,
                [email],
                (err, results) => {

                  // console.log(results)
                  if(err) res.send(err);
                  const hash= results[0].password
                   bcrypt.compare(password,hash).then(passCorrecto=>{

                          if(passCorrecto){
                            res.send({
                      idUsuario:results[0].idUsuario,
                      nombre:results[0].nombre ,
                      apellido:results[0].apellido ,
                      alias:results[0].alias 
                    })
                  }
                   })
              
           
                }
              );
        }
}

const metodoPostUsuario =  (req,res) =>{
    let { nombre, apellido, email, alias,password} =  req.body.usuario;
    // TODO: codificar pass
    // vueltas de encriptacion 
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password,salt)

    if(req.body.usuario){
       connection.query(
        'INSERT INTO usuarios VALUE ( null, ?, ?, ?, ?, ? , true )'  ,
        [nombre, apellido, email, alias,password],
        (err, results) => {
           if(err) res.send(err);
          res.send(results);
          // console.log(results)
        }
      );
}
}



const metodoPutUsuario =  (req,res) =>{
  const {nombre, apellido, mail, tipo, alias,password} =  req.body.usuarios;
  const idUsuario = parseInt(req.params.idUsuario)
  if(req.body.usuarios){
     connection.query(
      'UPDATE usuarios SET nombre = ?,apellido = ? , mail = ?, tipo = ?, alias = ?,password = ? WHERE idUsuario = ?'  ,
      [nombre, apellido, mail, tipo, alias,password,idUsuario],
      (err, results) => {
         if(err) res.send(err);
        res.send(results);
      }
    );
}
}

const metodoDeleteUsuario =  (req,res) =>{
  const idUsuario = parseInt(req.params.idUsuario)
  if(idUsuario){
     connection.query(
      'UPDATE usuarios SET activo = false WHERE idUsuario = ?',
      [idUsuario],
      (err, results) => {
         if(err) res.send(err);
        res.send(results);
      }
    );
}
}

module.exports = {
    metodoGetUsuario,
    metodoPostUsuario,
    metodoPutUsuario,
    metodoDeleteUsuario
  }