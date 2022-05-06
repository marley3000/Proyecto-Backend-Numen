const validar = (req, res, next) => {
    if (req.body.codigo) {
        next();    
    } else {
        res.json({msg:"el código no cumple con los parámetros requeridos"})
    }
}

module.exports = {validar}