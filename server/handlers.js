require("dotenv").config({ path: "../.env" });
const {STEAM_KEY} = process.env;

//fetching data from steam api
const SteamAPI = require('steamapi');
const steam = new SteamAPI(STEAM_KEY);

//example
steam.resolve('https://steamcommunity.com/id/DimGG').then(id => {
	console.log(id); // 76561198146931523
});

steam.getAppList().then(apps => {
    //console.log(apps); array of objects conatining app info appid as number and name as string
});

steam.getGameDetails(730).then(details => {
    console.log(details.header_image);
    console.log(details.name);
    console.log(details.detailed_description); 
});




