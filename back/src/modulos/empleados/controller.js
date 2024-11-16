const db = require('../../db/db');
const Entidad = 'empleado';

function getAll(){
    return db.getAllColaboradores(Entidad);
}

function getById(id){
    return db.getById(Entidad,id)
}

function register(id,nom,ape,cel,ed,nurse){
    return db.registerEmployed(Entidad,id,nom,ape,cel,ed,nurse)
}

module.exports = {
    getAll,
    getById,
    register
}