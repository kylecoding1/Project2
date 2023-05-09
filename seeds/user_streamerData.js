const { User_Streamer } = require("../models");

const user_streamerData = [
  {
    user: 1,
    streamer: 1,
  },
  {
    user: 1,
    streamer: 2,
  },
  {
    user: 1,
    streamer: 3,
  },
  {
    user: 1,
    streamer: 4,
  },
  {
    user: 1,
    streamer: 5,
  },
  {
    user: 2,
    streamer: 1,
  },
  {
    user: 2,
    streamer: 2,
  },
  {
    user: 3,
    streamer: 4,
  },
  {
    user: 5,
    streamer: 1,
  },
  {
    user: 5,
    streamer: 2,
  },
  {
    user: 5,
    streamer: 3,
  },
  {
    user: 5,
    streamer: 4,
  },
];

const user_streamer = () => User_Streamer.bulkCreate(user_streamerData);

module.exports = user_streamer;
