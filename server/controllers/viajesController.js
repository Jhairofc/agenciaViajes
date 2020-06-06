const destino = require('../Models/Destinos');
exports.infoViajes = async (req, res)=>{
    const viajes = await destino.findAll()
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
};
exports.infoViaje = async (req, res)=>{
    const viaje = await destino.findByPk(req.params.id)
    res.render('viaje', {
        pagina: 'Acerca del Viaje',
        viaje
    });
}