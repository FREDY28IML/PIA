const db = require('../../db/db');
const Entidad = 'visita';

function getAll(){
    return db.getAllCitas(Entidad);
}

function getById(id){
    return db.getById(Entidad,id)
}

function register(adress,hour,collab,pati){
    return db.registerVisit(Entidad,adress,hour,collab,pati)
}

module.exports = {
    getAll,
    getById,
    register
}