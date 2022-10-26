//archivo para crear las rutas del server (endpoints)

const router = require('express').Router();
const conexion = require('./config/conexionBD');

//asignacion de las rutas

//consultas a la base de datos para las peticiones del cliente (front)

//tomar todos los datos de la tabla
router.get('/', (req, res) => { //req y res indica request y response, parametro de entrada y parametro de salida
    let sql = 'select * from superheroes_tb'; //se realiza la sentencia
    conexion.query(sql, (err, rows, fields) => { //se le envia la secuencia sql al query, y este puede devuelvor tres parametros
        if(err) throw err; //si existe un error, que lo muestre
        else{
            res.json(rows); //formatea la repuesta en un json pasandole las filas de respuesta de la sentencia sql
        }
    })
});


//trae un elemento por su id
router.get('/id/:id', (req, res) => { // :id indica que se va colocar el id en la url
    const {id} = req.params;
    let sql = 'select * from superheroes_tb where id_superheroe = ?'; //el ? indica que el ese dato lo reemplaza el id que llega como parametro
    conexion.query(sql,[id],(err, rows, fields) => { //se le envia la secuencia sql al query junto con el id
        if(err) throw err; //si existe un error, que lo muestre
        else{
            res.json(rows); //formatea la repuesta en un json pasandole las filas de respuesta de la sentencia sql
        }
    })
});

//trae un elemento por su nombre
router.get('/nombre/:nombre', (req, res) => { // :nombre indica que se va colocar el nombre en la url
    const {nombre} = req.params;
    let sql = 'select * from superheroes_tb where nombre = ?'; //el ? indica que el ese dato lo reemplaza el id que llega como parametro
    conexion.query(sql,[nombre],(err, rows, fields) => { //se le envia la secuencia sql al query junto con el id
        if(err) throw err; //si existe un error, que lo muestre
        else{
            res.json(rows); //formatea la repuesta en un json pasandole las filas de respuesta de la sentencia sql
        }
    })
}); 

//trae un elemento por su ciudad
router.get('/ciudad/:ciudad', (req, res) => { // :ciudad indica que se va colocar la ciudad en la url
    const {ciudad} = req.params;
    let sql = 'select * from superheroes_tb where ciudad_operacion = ?'; //el ? indica que el ese dato lo reemplaza el id que llega como parametro
    conexion.query(sql,[ciudad],(err, rows, fields) => { //se le envia la secuencia sql al query junto con el id
        if(err) throw err; //si existe un error, que lo muestre
        else{
            res.json(rows); //formatea la repuesta en un json pasandole las filas de respuesta de la sentencia sql
        }
    })
});

//agregar un nuevo elemento a la tabla en BD
router.post('/', (req, res) => { // :id indica que se va colocar el id en la url
    const {nombre, grupo, ciudad_operacion, condicion, superpoder, vehiculo, tipo_vehiculo,logo} = req.body; //se recupera del body, el cuerpo del objeto
    let sql = `insert into superheroes_tb (nombre, grupo, ciudad_operacion, condicion, superpoder, vehiculo, tipo_vehiculo, logo) values ('${nombre}', '${grupo}', '${ciudad_operacion}', '${condicion}', '${superpoder}', '${vehiculo}', '${tipo_vehiculo}', '${logo}') `;
    conexion.query(sql, (err, rows, fields) => { //se le envia la secuencia sql al query junto con el id
        if(err) throw err; //si existe un error, que lo muestre
        else{
            res.json({status: 'Super Heroe agregado exitosamente!!'}); //formatea la repuesta en un json pasandole las filas de respuesta de la sentencia sql
        }
    })
});

//eliminar un elemento de la tabla en BD
router.delete('/:id', (req, res) => { // :id indica que se va colocar el id en la url
    const {id} = req.params;
    let sql = `delete from superheroes_tb where id_superheroe = '${id}'`;
    conexion.query(sql, (err, rows, fields) => { //se le envia la secuencia sql al query junto con el id
        if(err) throw err; //si existe un error, que lo muestre
        else{
            res.json({status: 'Super Heroe eliminado exitosamente!!'}); //responde un status en formato json
        }
    })
});

//modificar un elemento de la tabla en BD
router.put('/:id', (req, res) => { //res y req como parametros de entrad y salida, :id indica que se va colocar el id en la url
    const {id} = req.params; //.param me indica que el valor del id se obtendra del parametro de entrada de la url
    const {nombre, ciudad_operacion} = req.body; //.body indica que los valores de nombre y ciudad se obtendran del parametro de entrada del objeto que llega como request (json)
    console.log(req.body);
    console.log(nombre);
    console.log(ciudad_operacion);
    let sql = `update superheroes_tb set 
                nombre = '${nombre}', ciudad_operacion = '${ciudad_operacion}'
                where id_superheroe = '${id}'`;

    conexion.query(sql, (err, rows, fields) => { //se le envia la secuencia sql al query junto con el id
        if(err) throw err; //si existe un error, que lo muestre
        else{
            res.json({status: 'Se ha modificado el Super Heroe exitosamente!!'}); //responde un status en formato json
        }
    })
});


module.exports = router;