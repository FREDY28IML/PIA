exports.success=function(req,resp,status,msj){
    resp.status(status).send({
        error: false,
        status: status,
        msg: 'completado',
        body: msj
    })
}

exports.error=function(req,resp,status,msj){
    resp.status(status).send({
        error: true,
        status: status,
        msg: 'completado',
        body: msj
    })
}