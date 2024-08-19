const sequelize = require('./config/database');
require('./models/artists');
require('./models/songs');

const app = require('./app'); 

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
      console.log('Tablas creadas correctamente.');
    
    // iniciar el seridor despues de la sincronización
      app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
      });
  })
  .catch(err => {
      console.error('No se pudo sicronizar la base de datos:', err);
  });
  