module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            len: [1]
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Burger.belongsTo(models.Customer, {
                    foreignKey: {
                        allowNull: true
                    }
                });
            }
        }
    });
    return Burger;
};