module.exports = function(sequelize, DataTypes) {
    var CourtStatus = sequelize.define("courtStatus", {
      comments: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numOfPlayers: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lookingForMorePlayers: {type: DataTypes.BOOLEAN}
    });
  
    CourtStatus.associate = function(models) {
      // We're saying that a courtStatus should belong to a Court
      // A courtStatus can't be created without a Court due to the foreign key constraint
      CourtStatus.belongsTo(models.Courts, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    CourtStatus.associate = function(models) {
        // We're saying that a courtStatus should belong to a Court
        // A courtStatus can't be created without a Court due to the foreign key constraint
        CourtStatus.belongsTo(models.Users, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return CourtStatus;
  };

  