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
    const { monto, titulo, descripcion, tipo, fechaInicio,fechaFinal,idUsuario} =  req.body.ingresos;
    
    if(req.body.ingresos){
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
  const {monto, titulo, descripcion, tipo, fechaInicio,fechaFinal} =  req.body.ingresos;
  const idIngreso = parseInt(req.params.idIngreso)
  if(req.body.ingresos){
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
  const idIngreso = parseInt(req.params.idIngreso)
  if(idIngreso){
     connection.query(
      'UPDATE ingresos SET activo = false WHERE idIngreso = ?',
      [idIngreso],
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