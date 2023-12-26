require('dotenv').config();

const mongoose = require("mongoose");

async function connection() {
  let env = process.env;
  let mongoHost = env.DB_HOST + ':' + env.DB_PORT;
  let mongoDbURL = 'mongodb://' + mongoHost;

  if (env.DB_USERNAME) {
    mongoDbURL = 'mongodb://' + env.DB_USERNAME + ':' + env.DB_PASSWORD + '@' + mongoHost;
  }

  mongoose.connection.on("connected", () => {
    console.log(`Successfully connected to MongoDB at ${mongoHost}`);
  });

  mongoose.connection.on("error", err => {
    console.error(`Failed to connect to MongoDB at ${mongoHost}: ${err}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log(`Default connection to MongoDB at ${mongoHost} disconnected`);
  });

  try {

    await mongoose.connect(mongoDbURL, {
      dbName: env.DB_NAME,
    });

  } catch (e) {
    console.error(e);
    throw new Error('Unable to Connect to Database');
  }
}

module.exports = connection;
