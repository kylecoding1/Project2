const User = require("./User");
const Streamer = require("./Streamer");
const Platform = require("./Platform");
const User_Streamer = require("./User_Streamer");

User.belongsToMany(Streamer, { through: User_Streamer });
Streamer.belongsToMany(User, { through: User_Streamer });

User_Streamer.belongsTo(Streamer, { foreignKey: "streamer_id" });
Streamer.hasMany(User_Streamer, { foreignKey: "streamer_id" });

Streamer.belongsTo(Platform, {
  foreignKey: "platform_id",
});
Platform.hasMany(Streamer, {
  foreignKey: "platform_id",
});

module.exports = { User, Streamer, Platform, User_Streamer };
