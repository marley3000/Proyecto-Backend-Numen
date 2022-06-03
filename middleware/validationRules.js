const {check, validationResult} = require('express-validator')

exports.rules = [
    check("name").not().isEmpty().withMessage("Debe colocar un nombre").isLength({max:21, min:2}).withMessage("El nombre debe contener entre 3 y 20 caracteres"),
    check("destination").not().isEmpty().withMessage("Debe indicar por lo menos un destino visitado").isLength({min:3, max:26}).withMessage("El destino debe contener entre 4 y 25 caracteres"),
    check("number_travelers").not().isEmpty().withMessage("Indicar la cantidad de personas que participaron del viaje"),
    check("duration_days").not().isEmpty().withMessage("Debe indicar la duración del viaje"),
    check("valoration").not().isEmpty().withMessage("Indique la valoración del destino").isFloat({max:10}).withMessage("La valoración debe estar entre 0 y 9, siendo 0 el puntaje más bajo y 9 el más alto"),
    check("activities").not().isEmpty().withMessage("Debe indicar al menos una actividad realizada").isLength({max:500, min:2}).withMessage("Las actividades deben contener entre 3 y 500 caracteres"),
    check("opinion").not().isEmpty().withMessage("Debe colocar una opinión del destino").isLength({max:500, min:2}).withMessage("La opinión debe contener entre 3 y 500 caracteres")
];

exports.checks = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(442).json({msg: "Ha ocurrido un error, verifique la información y vuelva a intentarlo", errors: errors.array()});
    }
    next();
};

