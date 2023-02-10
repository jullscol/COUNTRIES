const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const countryRouter = require('./Country.routes.js');
const activityRouter = require('./Activity.routes.js');

router.use('/countries', countryRouter);
router.use('/activity', activityRouter);



module.exports = router;
