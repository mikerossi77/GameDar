module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Court model a name, address, and number of courts
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: DataTypes.STRING,
    hash: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['active', 'inactive'],
      defaultValue: 'inactive'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: { type: DataTypes.TEXT },
    height: { type: DataTypes.TEXT },
    level: { type: DataTypes.TEXT },
  });

  Users.associate = function (models) {
    // Associating Court with courtStatus
    // When an Court is deleted, also delete any associated courtStatus
    Users.hasMany(models.courtStatus, {
      onDelete: "cascade"
    });
  };

  return Users;
};