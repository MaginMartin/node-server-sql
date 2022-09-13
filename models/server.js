const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
class Server{
    constructor(){
        // carga variable de entorno con el puerto
        this.port= process.env.PORT;
        this.app = express();
        this.middleware()
        // rutas
        this.routes();
    }
    // middleware
    middleware(){
    // config cors
    this.app.use(cors())
    //  Servir contenido 
    this.app.use(express.static('public'))
    // parserar body
    this.app.use(bodyParse.json())
    }
    // rutas
    routes(){
     this.app.use('/ingresos', require('../routes/ingresos.routes'));
     this.app.use('/egresos', require('../routes/egresos.routes'));
     this.app.use('/usuario', require('../routes/usuarios.routes'));
    //  this.app.use('/notas', require('../routes/notas.routes'))
    }
    //  Dispara el servidor
    listen(){

            this.app.listen(this.port)
    }
}


module.exports = Server;