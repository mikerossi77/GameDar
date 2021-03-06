module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      // Giving the Court model a name, address, and number of courts
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {type: DataTypes.TEXT},
      height: {type: DataTypes.TEXT},
      position: {type: DataTypes.TEXT},
      level: {type: DataTypes.TEXT},
    });

    Users.associate = function(models) {
      // Associating Court with courtStatus
      // When an Court is deleted, also delete any associated courtStatus
      Users.hasMany(models.courtStatus, {
        onDelete: "cascade"
      });
    };

    return Users;
  };