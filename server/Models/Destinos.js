const sequelize = require('sequelize');
const db = require('../config/database');

const Destino = db.define('destinos', {
    titulo: {
        type: sequelize.STRING
    },
    precio: {
        type: sequelize.STRING
    },
    fecha_ida: {
        type: sequelize.DATE
    },
    fecha_vuelta: {
        type: sequelize.DATE
    },
    imagen: {
        type: sequelize.STRING
    },
    descripcion: {
        type: sequelize.STRING
    },
    disponibles: {
        type: sequelize.STRING
    },
})
module.exports = Destino;