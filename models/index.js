const Location = require('./Location');
const Traveler = require('./Traveler');

//traveler has many locations

Traveler.hasMany(Location, {
    foreignKey: loca
})