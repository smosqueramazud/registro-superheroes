//configuracion del servidor con node js y express js

require('./config/conexionBD');

const express = require('express'); //llamamos la dependencia de express js
const port = (process.env.port || 3000); //configuracion del puerto donde se va a ejecturar el servidor, el process permite recuperar el puerto del servior cuando ya se corrio el servidor, en caso contrario utiliza el puerto 3000

//express
const app = express(); //llamamos una instancia de express y se almacena en app

//admision de tipos de datos de entrada
app.use(express.json()); // se pone la expresion json para indicar que admita tipos de datos en formato json como parametros de entrada en los servicios post

//configuracion del puerto
app.set('port',port);

//rutas
app.use('/api',require('./rutas')); //asignamos las rutas al index, se crea el /api para no generar errores con el llamado de rutas desde angular

//iniciar express
app.listen(app.get('port'), (error)=>{  //se inicia el servidor llamando el puerto
    if(error){
        console.log('Ocurrio un error iniciando el servidor:' + error);
    }else{
        console.log('Servidor iniciado correctamente en el puerto:' + port);
    }
});

//para correrlo en el navegador http://localhost:3000/api