const routes = require('next-routes');

module.exports = routes()
  .add('root', '/', 'index')
  .add('vehicles')
  .add('films')
  .add('planets')
  .add('character', '/character/:characterId', 'character')
  .add('film', '/film/:filmId', 'film')
  .add('planet', '/planet/:planetId', 'planet')
  .add('vehicle', '/vehicle/:vehicleId', 'vehicle')