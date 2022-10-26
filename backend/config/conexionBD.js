//ver documentacion de express js
//https://expressjs.com/en/guide/database-integration.html

const mysql = require('mysql'); //llamamos la dependencia sql

const conexion = mysql.createConnection({ //pasamos los parametros de conexion con la DB
    host: 'localhost',
    user: 'root',
    password: 'solocali',
    port: 3306,
    database: 'universo_marvel_db'
  });

  conexion.connect((err) => { //establecemos la conexion
    if(err){
        console.log('Ocurrio un error inesperado con la conexión a la BD:' + err);
    }else{
        console.log('La conexión con la Base de datos se establecio correctamente!!');
    }
  });

  module.exports = conexion; //exportamos la conexion para reutilizar en el proyecto
  

  