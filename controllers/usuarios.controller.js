const connection = require("../config/sqlConnection");


 const metodoGetUsuario =  (req,res) =>{
        if(req.params.idUsuario){
              connection.query(
                'SELECT * FROM usuarios WHERE idUsuario = ? AND activo = 1'  ,
                [req.params.idUsuario],
                (err, results) => {
                  if(err) res.send(err);
                  res.send(results);
                }
              );
        }
}

const metodoPostUsuario =  (req,res) =>{
    const { nombre, apellido, mail, tipo, alias,password} =  req.body.usuario;
    // TODO: codificar pass
    if(req.body.usuario){
       connection.query(
        'INSERT INTO usuarios VALUE ( null, ?, ?, ?, ?, ? , true )'  ,
        [nombre, apellido, mail, tipo, alias,password],
        (err, results) => {
           if(err) res.send(err);
          res.send(results);
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