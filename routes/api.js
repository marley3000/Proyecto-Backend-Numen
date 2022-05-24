const express = require('express');
const router = express.Router(); 
const {vistaViajes, crearViaje, vistaUnViaje, vistaViajeDestination, vistaAlgunosViajes, editarViaje, borrarViaje} = require('../controller/controller.js');
const {validationId} = require("../middleware/validationId");
const {validationDestination} = require("../middleware/validationDestination");
const validationRules = require("../middleware/validationRules")


router.get("/ver", vistaViajes);

router.get("/verDestino/:destination", validationDestination, vistaViajeDestination)

router.get("/verAlgunos", vistaAlgunosViajes);

router.post('/crear', validationRules.rules, validationRules.checks, crearViaje);

router.get("/ver/:id", validationId, vistaUnViaje);

router.put("/editar/:id", validationRules.rules, validationRules.checks, validationId, editarViaje);

router.delete("/eliminar/:id", validationId, borrarViaje);



module.exports = router;
