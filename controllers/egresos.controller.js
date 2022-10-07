const connection = require("../config/sqlConnection");


 const metodoGetEgreso =  (req,res) =>{
        if(req.params.idUsuario){
              connection.query(
                'SELECT * FROM egresos WHERE idUsuario = ? AND activo = 1'  ,
                [req.params.idUsuario],
                (err, results) => {
                  if(err) res.send(err);
                  res.send(results);
                }
              );
        }
}

const metodoPostEgreso =  (req,res) =>{
    const { monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idUsuario} =  req.body.datosApp;
    
    if(req.body.datosApp){
       connection.query(
        'INSERT INTO egresos VALUE ( null, ?, ?, ?, ?, ? , ?, ?, true )'  ,
        [monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idUsuario],
        (err, results) => {
           if(err) res.send(err);
          res.send(results);
        }
      );
}
}



const metodoPutEgreso =  (req,res) =>{
  const {monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idEgreso} =  req.body.datosApp;
  if(req.body.datosApp){
     connection.query(
      'UPDATE egresos SET monto = ?,titulo = ? , descripcion = ?, tipo = ?, fechaInicio = ?,fechaFinal = ? WHERE idEgreso = ?'  ,
      [monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idEgreso],
      (err, results) => {
         if(err) res.send(err);
        res.send(results);
      }
    );
}
}

const metodoDeleteEgreso =  (req,res) =>{
  const idEgreso = parseInt(req.body.datosApp.idEgreso)
  if(idEgreso){
     connection.query(
      'UPDATE egresos SET activo = false WHERE idEgreso = ?',
      [idEgreso],
      (err, results) => {
         if(err) res.send(err);
        res.send(results);
      }
    );
}
}



module.exports = {
    metodoGetEgreso,
    metodoPostEgreso,
    metodoPutEgreso,
    metodoDeleteEgreso
  }