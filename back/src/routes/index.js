const express=require('express')
const enrutador=express.Router()
const resp=require('../util/rsp')
const controllerE =  require('../modulos/empleados/controller')
const controllerP =  require('../modulos/pacientes/controller')
const controllerC =  require('../modulos/visitas/controller')

//MODULO DE CITAS

enrutador.post('/citas/create', (req,res)=>{
    const adress= req.body.direccion;
    const hour = req.body.hora;
    const collab = req.body.idCuidador;
    const pati = req.body.idPaciente;

    controllerC.register(adress,hour,collab,pati)
        .then((items) => {
            if (items) {
                resp.success(req, res, 200, 'Registro insertado exitosamente');
            } else {
                resp.success(req, res, 500, 'Error de sistema');
            }
        })
        .catch((error) => {
            console.error(error); // Log de error para depuración
            resp.success(req, res, 500, 'Error al procesar la solicitud');
        });
})

enrutador.get('/citas/consulta', (req,res)=>{
    const getAllUser = controllerC.getAll().then((items) => {
        resp.success(req, res, 200, items);
    })
})

enrutador.get('/citas/detalle/:id', (req,res)=>{
    const id = req.params.id
    const getCita = controllerE.getById(id).then((items) => {
        resp.success(req, res, 200, items);
    })
})

//MODULO EMPLEADOS

enrutador.post('/empleados/create', (req,res)=>{
    const id= req.body.documento;
    const nom = req.body.nombres;
    const cel = req.body.telefono;
    const ed = req.body.edad;
    const nurse = req.body.enfermero;

    controllerE.register(id,nom,cel,ed,nurse)
        .then((items) => {
            if (items) {
                resp.success(req, res, 200, 'Registro insertado exitosamente');
            } else {
                resp.success(req, res, 500, 'Error de sistema');
            }
        })
        .catch((error) => {
            console.error(error); // Log de error para depuración
            resp.success(req, res, 500, 'Error al procesar la solicitud');
        });
})

enrutador.get('/empleados/byId/:id', (req,res)=>{
    const id = req.params.id
    const getUser = controllerE.getById(id).then((items) => {
        resp.success(req, res, 200, items);
    })
})

enrutador.get('/empleados/consulta', (req,res)=>{
    const getAllUser = controllerE.getAll().then((items) => {
        resp.success(req, res, 200, items);
    })
})

//MODULO PACIENTES

enrutador.post('/pacientes/create', (req,res)=>{
    const id= req.body.documento;
    const nom = req.body.nombres;
    const cel = req.body.telefono;
    const ed = req.body.edad;
    const obs = req.body.obs;

    controllerP.register(id,nom,cel,ed,obs)
        .then((items) => {
            if (items) {
                resp.success(req, res, 200, 'Registro insertado exitosamente');
            } else {
                resp.success(req, res, 500, 'Error de sistema');
            }
        })
        .catch((error) => {
            console.error(error); // Log de error para depuración
            resp.success(req, res, 500, 'Error al procesar la solicitud');
        });
})

enrutador.get('/pacientes/byId/:id', (req,res)=>{
    const id = req.params.id
    const getUser = controllerP.getById(id).then((items) => {
        resp.success(req, res, 200, items);
    })
})

enrutador.get('/pacientes/consulta', (req,res)=>{
    const getAllUser = controllerP.getAll().then((items) => {
        resp.success(req, res, 200, items);
    })
})

enrutador.post('/contacto', (req,res)=>{
    resp.success(req,res,200,'Exitoso')
})
 


module.exports=enrutador