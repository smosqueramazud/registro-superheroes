create database if not exists universo_marvel_db;

use universo_marvel_db;

create table superheroes_tb(
	id_superheroe int not null auto_increment primary key,
    nombre varchar(50),
    grupo varchar(50),
    ciudad_operacion varchar(100),
    condicion varchar(80),
    superpoder varchar(200),
    vehiculo int,
    tipo_vehiculo varchar(100),
    logo varchar(400)
);

insert into superheroes_tb (nombre, grupo, ciudad_operacion, condicion, superpoder, vehiculo, tipo_vehiculo,logo) values ('Dr Strange', 'Súper Héroes', 'Cali', 'Libertad', 'Poderes Mágicos', 1, 'Automovil', 'https://w7.pngwing.com/pngs/481/196/png-transparent-basketball-ball-logo-doctor-strange-sanctum-sanctorum-clea-dormammu-hulk-dr-strange-logo-angle-logo-symmetry.png'  );