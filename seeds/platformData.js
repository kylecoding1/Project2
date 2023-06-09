const { Platform } = require("../models");

const platformData = [
  {
    platform_name: "Twitch",
  },
  {
    platform_name: "Youtube",
  },
  {
    platform_name: "Tik Tok",
  },
  {
    platform_name: "Rumble",
  },
  {
    platform_name: "Kick",
  },
];

const seedPlatform = () => Platform.bulkCreate(platformData);

module.exports = seedPlatform;
