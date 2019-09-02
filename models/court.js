module.exports = function(sequelize, DataTypes) {
    var Courts = sequelize.define("Courts", {
      // Giving the Court model a name, address, and number of courts
      courtName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });

    Courts.associate = function(models) {
      // Associating Court with courtStatus
      // When an Court is deleted, also delete any associated courtStatus
      Courts.hasMany(models.courtStatus, {
        onDelete: "cascade"
      });
    };

    return Courts;
  };