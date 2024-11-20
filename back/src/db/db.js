const mysql = require('mysql2');
const config = require('../config');
const fs = require('fs');
const path = require('path');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: config.mysql.port,
    ssl: config.mysql.ssl,
    connectTimeout: 10000
};

// Declara conn como una variable global para que esté disponible en todo el archivo
let conn;
let reintentos = 0;
const maxreintentos = 3;

// Reemplaza la declaración de conn dentro de conDB con la variable global
function conDB() {
    conn = mysql.createConnection(dbConfig); // Usa la variable global

    conn.connect((error) => {
        if (error) {
            reintentos++;
            console.log(`Error de conexion a la DB: ${error}`);
            if (reintentos >= maxreintentos)
                process.exit(1);
            setTimeout(conDB, 200);
		 
        } else {
            console.log('Conexion a la DB exitosa');
        }
    });
}

conDB();

function getAllCitas(entidad){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT tv.direccion, tv.hora, u_empleado.nombres AS cuidador, u_paciente.nombres AS paciente, p.observaciones FROM visita tv JOIN empleado e ON tv.idEmpleado = e.idUsuario JOIN paciente p ON tv.idPaciente = p.idUsuario JOIN usuarios u_empleado ON e.idUsuario = u_empleado.idUsuario JOIN usuarios u_paciente ON p.idUsuario = u_paciente.idUsuario`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

function getAllPacientes(entidad){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT 
    u_paciente.nombres AS paciente, 
    p.observaciones, 
    u_paciente.edad 
FROM 
    paciente p
JOIN 
    usuarios u_paciente 
ON 
    p.idUsuario = u_paciente.idUsuario;`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

function getAllColaboradores(entidad){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT 
    u_empleado.nombres AS cuidador, 
    u_empleado.celular, 
    u_empleado.edad ,
    e.enfermero
FROM 
    empleado e
JOIN 
    usuarios u_empleado 
ON 
    e.idUsuario = u_empleado.idUsuario;`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

function getById(entidad,id){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT tv.direccion, tv.hora, u_empleado.nombres AS cuidador, u_paciente.nombres AS paciente, p.observaciones FROM visita tv JOIN empleado e ON tv.idEmpleado = e.idUsuario JOIN paciente p ON tv.idPaciente = p.idUsuario JOIN usuarios u_empleado ON e.idUsuario = u_empleado.idUsuario JOIN usuarios u_paciente ON p.idUsuario = u_paciente.idUsuario WHERE tv.idVisita =${id}`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

function registerEmployed(entidad, id, nom, cel, ed, nurse) {
    return new Promise((resolve, reject) => {
        // Inserción en la tabla 'usuarios'
        const queryUsuario = `INSERT INTO usuarios (idUsuario, nombres, celular, edad) VALUES (?, ?, ?, ?)`;
        const usuarioValues = [id, nom, cel, ed];
        
        conn.query(queryUsuario, usuarioValues, (error, result) => {
            if (error) {
                return reject(error); // Rechaza la promesa si hay error en la inserción de usuarios
            }

            // Inserción en la tabla dinámica (empleado)
            const queryEmpleado = `INSERT INTO ${entidad} (enfermero, idUsuario) VALUES (?, ?)`;
            const empleadoValues = [nurse, id];

            conn.query(queryEmpleado, empleadoValues, (error, result) => {
                if (error) {
                    return reject(error); // Rechaza la promesa si hay error en la inserción de empleado
                }
                // Si todo fue exitoso, resolvemos la promesa
                resolve(result);
            });
        });
    });
}


function registerPatient(entidad,id,nom,cel,ed,obs){
    return new Promise((resolve, reject) => {
        // Inserción en la tabla 'usuarios'
        const queryUsuario = `INSERT INTO usuarios (idUsuario, nombres, celular, edad) VALUES (?, ?, ?, ?)`;
        const usuarioValues = [id, nom, cel, ed];
        
        conn.query(queryUsuario, usuarioValues, (error, result) => {
            if (error) {
                return reject(error); // Rechaza la promesa si hay error en la inserción de usuarios
            }

            // Inserción en la tabla dinámica (paciente)
            const queryPaciente = `INSERT INTO ${entidad} (observaciones, idUsuario) VALUES (?, ?)`;
            const empleadoValues = [obs, id];

            conn.query(queryPaciente, empleadoValues, (error, result) => {
                if (error) {
                    return reject(error); // Rechaza la promesa si hay error en la inserción de empleado
                }
                // Si todo fue exitoso, resolvemos la promesa
                resolve(result);
            });
        });
    });
}

function registerVisit(entidad,adress,hour,collab,pati){
    return new Promise((resolve, reject) => {
        conn.query(`insert into ${entidad} (direccion,hora,idEmpleado,idPaciente) values ('${adress}','${hour}',${collab},${pati})`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

module.exports = {
    getAllCitas,
    getById,
    registerEmployed, 
    registerPatient,
    registerVisit,
    getAllPacientes,
    getAllColaboradores
}