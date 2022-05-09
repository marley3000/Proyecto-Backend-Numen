const {Travel} = require('../models/travels');

const validationId = async (req, res, next) => {
    try {
        const viaje = await Travel.findById(req.params.id)
        if (viaje !== null) {
            next();
        } else {
            res.status(400).json({msg: "El id ingresado no se encuentra en la base de datos."})
        }
    } 
    catch (error) {
        res.status(400).json({msg:"El formato de id ingresado es inválido, revíselo y vuelva a intentarlo", error})
    }
}

module.exports = {validationId}