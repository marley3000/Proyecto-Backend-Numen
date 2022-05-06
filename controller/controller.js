
const {Travel} = require('../models/travels');
const {check, validationResult, body} = require('express-validator')

const vistaUno = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaViajes = async (req, res) => {
    const viajes = await Travel.find()
    res.json({viajes})
}

const vistaUnViaje = async (req, res) => {
    try {
        const viaje = await Travel.findById(req.params.id)
            if (viaje !== null) {
                res.json({viaje})
            } else {
                res.json({msg: "El id ingresado no se encuentra en la base de datos"})
            }
    } catch (error) {
        res.status(400).json({msg:"El id ingresado es inválido, revíselo y vuelva a intentarlo", error})
    }
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
            const oldBody = req.body
            const editBody = await Travel.findByIdAndUpdate(id, req.body)
            res.status(202).json({name, msg: "La edición fue satisfactoria"})
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
        res.status(400).json({msg:"problemas a la hora de borrar la información"})
    }
}


module.exports = {vistaUno, vistaViajes, vistaUnViaje, vistaAlgunosViajes, crearViaje, editarViaje, borrarViaje} 