const {Travel} = require('../models/travels');

const validationDestination = async (req, res, next) => {
    const destino = await Travel.findOne(req.params)
    if (destino !== null) {
        next();
    } else {
        res.status(400).json({msg: "El destino ingresado no se encuentra en la base de datos."})
    }

}

module.exports = {validationDestination}