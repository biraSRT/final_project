const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');


const {
    getGame,
    register,
    login,
    getApps,
    getGames,
} = require("./handlers");

const PORT = 8000;

const app = express()

app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

//endpoints ex: "app.get("/example, example")"
app.get("/game/:_id", getGame);
app.get("/api/apps", getApps);
app.get("/api/games", getGames);
app.post("/api/register", register);
app.post("/api/login", login);


app.listen(PORT, () => console.log('Listening on port: ', PORT));

