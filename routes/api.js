const express = require('express');
const router = express.Router(); 
const {vistaViajes, crearViaje, vistaUnViaje, vistaAlgunosViajes, editarViaje, borrarViaje} = require('../controller/controller.js');
const {check, validationResult, body} = require("express-validator");
const {validar} = require("../middleware/validation");



router.get("/ver", vistaViajes);
router.get("/ver/:id", vistaUnViaje);
//Puedo poner un check o varios para cada campo, pero solo en los que son obligatorios
router.get("/verAlgunos", vistaAlgunosViajes);
router.post('/crear', [check("name").not().isEmpty().withMessage("el campo está vacío").isLength({max:15, min:4}).withMessage("el nombre debe contener entre 5 y 14 caracteres")], crearViaje);
router.put("/editar/:id", [check("name").not().isEmpty().withMessage("el campo está vacío").isLength({max:15, min:4}).withMessage("el nombre debe contener entre 5 y 14 caracteres")], editarViaje);
router.delete("/eliminar/:id", borrarViaje);



module.exports = router;
