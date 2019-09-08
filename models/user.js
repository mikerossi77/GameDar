module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      // Giving the Court model a name, address, and number of courts
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {type: DataTypes.TEXT},
      height: {type: DataTypes.TEXT},
      position: {type: DataTypes.TEXT}
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