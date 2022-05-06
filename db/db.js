// Se detalla la conexión

const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {  
        await mongoose.connect( "mongodb+srv://martinfac:marley3000@clase-backend-numen.dyck1.mongodb.net/test",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        console.log('Base de datos conectada');
    } catch {
        console.log('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {dbConnection}

