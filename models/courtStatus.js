module.exports = function(sequelize, DataTypes) {
    var CourtStatus = sequelize.define("courtStatus", {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      numOfPlayers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      }
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
  
    return CourtStatus;
  };
  