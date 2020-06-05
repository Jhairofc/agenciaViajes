const express = require('express');
const routes = express.Router();
//Controllers
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');
module.exports = function(){
    routes.get('/', homeController.infoHomePage);
    routes.get('/nosotros', nosotrosController.infoNosotros);
    routes.get('/viajes', viajesController.infoViajes);
    routes.get('/viajes/:id', viajesController.infoViaje);
    routes.get('/testimoniales', testimonialesController.infoTestimoniales);
    routes.post('/testimoniales', testimonialesController.saveTestimonio);
    return routes;
}