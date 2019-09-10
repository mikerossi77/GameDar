module.exports = function(sequelize, DataTypes) {
    var Sports = sequelize.define("Sports", {
      // Giving the Sport model a name, address, and number of sports
      sportName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    });

    // Sports.associate = function(models) {
    //   // Associating Sport with sportStatus
    //   // When an Sport is deleted, also delete any associated sportStatus
    //   Sports.belongsTo(models.court, {
    //     onDelete: "cascade"
    //   });
    // };

    return Sports;
  };