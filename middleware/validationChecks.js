const {check, validationResult, body} = require("express-validator");


const checks =  

    [check("name").not().isEmpty().withMessage("Debe colocar un nombre").isLength({max:20, min:3}).withMessage("El nombre debe contener entre 4 y 20 caracteres"),
    check("email").isEmail().withMessage("El email no es válido"),
    check("destination").not().isEmpty().withMessage("Debe indicar por lo menos un destino visitado").isLength({min:3}).withMessage("El destino debe contener como mínimo 4 caracteres"),
    check("number_travelers").not().isEmpty().withMessage("Indicar la cantidad de personas que participaron del viaje"),
    check("duration_days").not().isEmpty().withMessage("Debe indicar la duración del viaje"),
    check("valoration").not().isEmpty().withMessage("Indique la valoración del destino").isFloat({min:1, max:10}).withMessage("La valoración debe estar entre 1 y 10, siendo 1 el puntaje más bajo y 10 el más alto"),
    check("opinion").not().isEmpty().withMessage("Debe colocar una opinión del destino").isLength({max:100, min:5}).withMessage("La opinión debe contener entre 6 y 99 caracteres")];
    

module.exports = {checks}