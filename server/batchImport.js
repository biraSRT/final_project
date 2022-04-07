const { MongoClient } = require('mongodb');

require("dotenv").config({ path: "../.env" });
const { MONGO_URI  } = process.env;

const batchImport = async () => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db("finalProject");

     
};

batchImport();