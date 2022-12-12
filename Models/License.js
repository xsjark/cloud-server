const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database")

class License extends Model { }

License.init({
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "license",
})

module.exports = License;