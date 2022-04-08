require("dotenv").config({ path: "../.env" });
const {STEAM_KEY} = process.env;

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//fetching data from steam api
const SteamAPI = require('steamapi');
const steam = new SteamAPI(STEAM_KEY);

//example
steam.resolve('https://steamcommunity.com/id/DimGG').then(id => {
	console.log(id); // 76561198146931523
});

steam.getAppList().then(apps => {
    console.log(apps); // { "appid": "570", "name": "Dota 2" }
});

steam.getGameDetails(730).then(details => {
    console.log(details.header_image);
    console.log(details.name);
    console.log(details.detailed_description); 
});



const getItem = async (req, res) => {
    // Connect to MongoDB database
    const client = new MongoClient(MONGO_URI, option);
    await client.connect();
    const db = client.db();
  
    try {
      // Find item document based on it's _id
      const result = await db.collection("users").insert();
      result
        ? res.status(200).json({ status: 200, data: result, message: "success" })
        : res.status(400).json({ status: 400, message: "error" });
    } catch (err) {
      res.status(500).json({ status: 500, message: "server error" });
    } finally {
      client.close();
    }
  };

  module.exports = { getItem };




