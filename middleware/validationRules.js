const {check, validationResult} = require('express-validator')

exports.rules = [
    check("name").not().isEmpty().withMessage("Debe colocar un nombre").isLength({max:20, min:3}).withMessage("El nombre debe contener entre 4 y 20 caracteres"),
    check("destination").not().isEmpty().withMessage("Debe indicar por lo menos un destino visitado").isLength({min:3}).withMessage("El destino debe contener como mínimo 4 caracteres"),
    check("number_travelers").not().isEmpty().withMessage("Indicar la cantidad de personas que participaron del viaje"),
    check("duration_days").not().isEmpty().withMessage("Debe indicar la duración del viaje"),
    check("valoration").not().isEmpty().withMessage("Indique la valoración del destino").isFloat({min:1, max:10}).withMessage("La valoración debe estar entre 1 y 10, siendo 1 el puntaje más bajo y 10 el más alto"),
    check("opinion").not().isEmpty().withMessage("Debe colocar una opinión del destino").isLength({max:500, min:5}).withMessage("La opinión debe contener entre 6 y 499 caracteres")
];

exports.checks = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(442).json({msg: "Ha ocurrido un error, verifique la información y vuelva a intentarlo", errors: errors.array()});
    }
    next();
};

