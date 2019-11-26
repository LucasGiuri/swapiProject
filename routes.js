const routes = require('next-routes');

module.exports = routes()
  .add('root', '/', 'index')
  .add('vehicles')
  .add('films')
  .add('planets')
  .add('character', '/character/:characterId')
  .add('film', '/film/:filmId')
  .add('planet', '/planet/:planetId')
  .add('vehicle', '/vehicle/:vehicleId')
