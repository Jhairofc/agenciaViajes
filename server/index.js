//Importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
const bodyParser = require('body-parser');
//Probando Conexion
/*db.authenticate()
    .then(()=>{console.log('Conexion exitosa')})
    .catch(error=>{console.log(error);});  */

//Configurar Express
const app = express();
//Habilitar Pug
app.set('view engine', 'pug')
//Ambiente sobre el que estamos trabajando
const config  = configs[app.get('env')];
app.locals.env = config.envapp;

//Agregar las vistas
app.set('views', path.join(__dirname, './Views'));
//Cargar la carpeta public
app.use(express.static('public'));

//Anio Actual y el path activo
app.use((req, res, next)=>{
    //Obtener el anio actual
    const fecha = new Date();
    res.locals.AnioActual = fecha.getFullYear();
    res.locals.path = req.path;
    return next();
});
//BodyParser para leer datos de los formularios
app.use(bodyParser.urlencoded({extended: true}));
//Cargar rutas
app.use('/', routes());

//Validacion host y puerto cuando se trabaja en entornos de desarrollo y produccion
const host = process.env.host || '0.0.0.0';
const port = process.env.port || 3000;
app.listen(port, host, ()=>{
    console.log('El servidor esta funcionando: '+port);    
});