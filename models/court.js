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
      description: {type: DataTypes.TEXT},
      sport: {type: DataTypes.TEXT},
      address1: {type: DataTypes.TEXT},
      address2: {type: DataTypes.TEXT},
      city: {type: DataTypes.TEXT},
      state: {type: DataTypes.TEXT},
      zip: {type: DataTypes.TEXT},
      numFullCourts: {type: DataTypes.INTEGER},
      numHalfCourts: {type: DataTypes.TEXT},
      isPrivate: {type: DataTypes.BOOLEAN},
      isIndoor: {type: DataTypes.BOOLEAN},
      longitude: {type: DataTypes.FLOAT},
      latitude: {type: DataTypes.FLOAT},
    });

    Courts.associate = function(models) {
      // Associating Court with courtStatus
      // When an Court is deleted, also delete any associated courtStatus
      Courts.hasMany(models.courtStatus, {
        onDelete: "cascade"
      });
    };
    // Courts.associate = function(models) {
    //   // Associating Court with courtStatus
    //   // When an Court is deleted, also delete any associated courtStatus
    //   Courts.belongsTo(models.Sports, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };

    return Courts;
  };
