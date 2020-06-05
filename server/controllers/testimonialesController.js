const testimonial = require('../Models/Testimoniales');

exports.infoTestimoniales = async (req, res)=>{
    const testimoniales = await testimonial.findAll();
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
};
exports.saveTestimonio = async (req, res)=>{
    let {nombre, correo, mensaje} = req.body;
    let errores = [];
    if(!nombre)
        errores.push({'mensaje': 'Agregue un nombre'});
    if(!correo)
        errores.push({'mensaje': 'Agregue un correo'});
    if(!mensaje)
        errores.push({'mensaje': 'Agregue un mensaje'});
    if(errores.length > 0){
        //Error Filds
        const testimoniales = await testimonial.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,
            errores,
            nombre, 
            correo,
            mensaje
        });
    }else{
        //Save db
        testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error=> console.log(error));
    }
}