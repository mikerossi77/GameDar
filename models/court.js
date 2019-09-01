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

    return Courts;
  };