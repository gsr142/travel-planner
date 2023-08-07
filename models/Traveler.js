const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Traveler extends Model { }

Traveler.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        traveler_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        traveler_email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
)