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


const User = require('./models/user');

const getGame = async (req, res) => {
  // Connect to MongoDB database
  const client = new MongoClient(MONGO_URI, option);
  await client.connect();
  const db = client.db();

  try {
    // Find item document based on it's _id
    const _id = req.params._id;
    let result2;
    const result = await db.collection("Apps").findOne({ appid: parseInt(_id) });
    if (result) {
      await steam.getGameDetails(_id).then((details) => {
        result2 = {
          image: details.header_image,
          name: details.name,
          
        };
      });

      await steam.getGamePlayers(_id).then((players) => {
        result2= {
          ...result2,
          players: players,
        };
      });
    }
    
    result
      ? res.status(200).json({ status: 200, data: result2, message: "success" })
      : res.status(400).json({ status: 400, message: "error" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "server error" });
  } finally {
    client.close();
  }
};

const register = async (req, res) => {
  // Connect to MongoDB database
  const client = new MongoClient(MONGO_URI, option);
  await client.connect();
  const db = client.db();

  console.log(req.body);
  res.status(200).json({ status: 200,data: req.body , message: "success" })
   

};
module.exports = { getGame, register };


