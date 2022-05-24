
const {Travel} = require('../models/travels');
const {validationResult} = require('express-validator')

const vistaUno = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaViajes = async (req, res) => {
    const viajes = await Travel.find()
    res.json({viajes})
}

const vistaViajeDestination = async (req, res) => {
    const viaje = await Travel.find(req.params)
    res.json({viaje})
}

const vistaUnViaje = async (req, res) => {
    const viaje = await Travel.findById(req.params.id)
    res.json({viaje})
}

const vistaAlgunosViajes = async (req = request, res = response) => {
    const { limite = 4, desde = 2 } = req.query;
    const query = { estado: true };

    const [ total, viajes ] = await Promise.all([
       Travel.countDocuments(query),
        Travel.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        viajes
    });
}

const crearViaje = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const viaje = new Travel(req.body);
            await viaje.save()
            res.status(201).json({viaje, msg: "El viaje se cargó correctamente"})
        } else {
            res.status(501).json(error)
        }

    } catch (err) {
        res.status(501).json({msg: "Ocurrió un error durante la carga, por favor vuelva a intentarlo.", err})
    }
}

const editarViaje = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const {id} = req.params
            const newTravel = req.body
            const oldTravel = await Travel.findByIdAndUpdate(id, req.body)
            res.status(202).json({oldTravel, msg: "La edición fue satisfactoria", newTravel})
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({msg: "Problemas a la hora de editar la información", err})
    }
}

const borrarViaje = async (req, res) => {
    try {
        const viaje = await Travel.findByIdAndDelete(req.params.id)
        res.json({msg:"Se ha eliminado correctamente", viaje})
    } catch (error) {
        res.status(501).json({msg:"Ha surgido un inconveniente a la hora de eliminar la información."})
    }
}


module.exports = {vistaUno, vistaViajes, vistaViajeDestination, vistaUnViaje, vistaAlgunosViajes, crearViaje, editarViaje, borrarViaje} 