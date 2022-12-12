const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database")

class License extends Model { }

License.init({
    // TODO: owner
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
    modelName: "user",
})

module.exports = License;