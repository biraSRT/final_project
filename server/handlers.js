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


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("dotenv").config({ path: "../.env" });
const{ JWT_SECRET } = process.env;

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

  const {username, password: plainTextPassword, email } = req.body;

  //form validation
  if(!email.includes('@') || typeof email !== 'string'){
    return res.json({status: 'error', error: 'invalid email' })
  }

  if(!username || typeof username !== 'string'){
    return res.json({status: 'error', error: 'invalid username' })
  }

  if(!plainTextPassword || typeof plainTextPassword !== 'string'){
    return res.json({status: 'error', error: 'invalid password' })
  }

  if(plainTextPassword.length < 7){
    return res.json({status: 'error', error: 'password must be atleast 7 characters long' })
  }


  //password hash
  const password = await bcrypt.hash(plainTextPassword, 10);

  //try catch
  try{
    const response = await db.collection("users").insertOne({
      username,
      password,
      email
    })
    console.log("User created successfully", response);
    res.status(200).json({ status: 200, message: "success" })
  } catch (error) {
    console.log(error);
    return res.json({status: 'error'})
  }

  
   

};

const login = async (req, res) => {
  // Connect to MongoDB database
  const client = new MongoClient(MONGO_URI, option);
  await client.connect();
  const db = client.db();

  const { username, password } = req.body;
  const user = await db.collection("users").findOne({username});

  if(!user){
    return res.json({status: 'error', error: 'Invalid username/password'})
  }

  if(await bcrypt.compare(password, user.password)){
    // the username, password combination is successful

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);
    res.json({status: 'ok', data: token })
  }
  
};

module.exports = { getGame, register, login };


