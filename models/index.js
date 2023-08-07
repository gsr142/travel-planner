const Location = require('./Location.js');
const Traveler = require('./Traveler.js');
const TravelerLocation = require('./TravelerLocation.js');
//traveler has many locations

Traveler.hasMany(Location, {
    foreignKey: 'location_id'
});

Location.hasMany(Traveler, {
    foreignKey: 'traveler_id'
});

Traveler.belongsToMany(Location, {through: TravelerLocation});

Location.belongsToMany(Traveler, {through: TravelerLocation});