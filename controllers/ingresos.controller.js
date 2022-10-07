const connection = require("../config/sqlConnection");


 const metodoGetIngreso =  (req,res) =>{
        if(req.params.idUsuario){
              connection.query(
                'SELECT * FROM ingresos WHERE idUsuario = ? AND activo = 1'  ,
                [req.params.idUsuario],
                (err, results) => {
                  if(err) res.send(err);
                  res.send(results);
                }
              );
        }
}

const metodoPostIngreso =  (req,res) =>{
    const { monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idUsuario} =  req.body.datosApp;
    
    if(req.body.datosApp){
       connection.query(
        'INSERT INTO ingresos VALUE ( null, ?, ?, ?, ?, ? , ?, ?, true )'  ,
        [monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idUsuario],
        (err, results) => {
           if(err) res.send(err);
          res.send(results);
        }
      );
}
}



const metodoPutIngreso =  (req,res) =>{
  const {monto, titulo, descripcion, tipo, fechaInicio,fechaFinal} =  req.body.datosApp;
  const idIngreso = parseInt( req.body.datosApp.idIngreso)
  if(req.body.datosApp){
     connection.query(
      'UPDATE ingresos SET monto = ?,titulo = ? , descripcion = ?, tipo = ?, fechaInicio = ?,fechaFinal = ? WHERE idIngreso = ?'  ,
      [monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idIngreso],
      (err, results) => {
         if(err) res.send(err);
        res.send(results);
      }
    );
}
}

const metodoDeleteIngreso =  (req,res) =>{
  const id = parseInt( req.body.datosApp.idIngreso)
  if(id){
     connection.query(
      'UPDATE ingresos SET activo = 0 WHERE idIngreso = ?',
      [id],
      (err, results) => {
         if(err) res.send(err);
        res.send(results);
      }
    );
}
}



module.exports = {
    metodoGetIngreso,
    metodoPostIngreso,
    metodoPutIngreso,
    metodoDeleteIngreso
  }