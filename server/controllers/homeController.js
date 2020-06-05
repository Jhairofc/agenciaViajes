const destino = require('../Models/Destinos');
const testimonial = require('../Models/Testimoniales');
exports.infoHomePage =  async (req, res)=>{
    const viajes = await destino.findAll({limit: 3 });
    const testimoniales = await testimonial.findAll({limit: 3});
    res.render('index', {
        pagina: 'Principal',
        viajes,
        testimoniales,
        clase: "home"
    });
}