// const { MongoClient } = require('mongodb');

// require("dotenv").config({ path: "../.env" });
// const { MONGO_URI  } = process.env;

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// require("dotenv").config({ path: "../.env" });
// const {STEAM_KEY} = process.env;

// //fetching data from steam api
// const SteamAPI = require('steamapi');
// const steam = new SteamAPI(STEAM_KEY);

// const batchImport = async () => {
//     const client = new MongoClient(MONGO_URI, options);
//     await client.connect();
//     const db = client.db();

//     try {
//         // Import items to "items" collection
//         steam.getAppList().then(apps => {
//             console.log(apps); // { "appid": "570", "name": "Dota 2" }
//             db.collection("Apps").insertMany(apps);
//             console.log("Import success");
//         });
        
//     } catch (err) {
//         console.log(err.message);
//     }
//       client.close();
// };

// batchImport();