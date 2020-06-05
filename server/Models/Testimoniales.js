const sequelize = require('sequelize');
const db = require('../config/database');

const Testimoniales = db.define('testimoniales', {
    nombre: {
        type: sequelize.STRING
    },
    correo: {
        type: sequelize.STRING
    },
    mensaje: { 
        type: sequelize.STRING
    }
})
module.exports = Testimoniales;