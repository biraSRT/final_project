const { MongoClient } = require('mongodb');

require("dotenv").config({ path: "./.env" });
const { MONGO_URI  } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

require("dotenv").config({ path: "./.env" });

const {STEAM_KEY} = process.env;

//fetching data from steam api
const SteamAPI = require('steamapi');
const steam = new SteamAPI(STEAM_KEY);

const batchImport = async () => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db();
    let applications = [];
    let newArray = [];

//    await steam.getAppList().then(apps => {
        
//         apps.forEach(app => {
//             applications.push(app);
//         });
//         console.log(applications);
//         console.log("import successful");
//     });

    await steam.getGameNews(730).then(news => {

        console.log(news[0]);
    });
    

    try {
        // Import items to "items" collection
        //await db.collection("applications").insertMany(applications);
        //await db.collection("ftGames").insertMany(newArray);
        
        
    } catch (err) {
        console.log(err.message);
    }
      client.close();
};

batchImport();