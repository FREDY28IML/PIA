const db = require('../../db/db');
const Entidad = 'paciente';

function getAll(){
    return db.getAllPacientes(Entidad);
}

function getById(id){
    return db.getById(Entidad,id)
}

function register(id,nom,cel,ed,obs){
    return db.registerPatient(Entidad,id,nom,cel,ed,obs)
}

module.exports = {
    getAll,
    getById,
    register
}