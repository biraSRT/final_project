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
    commentPost,
    getAllComments,
    getAllUsers,
} = require("./handlers");

const PORT =  process.env.PORT;

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
app.post("/api/comment", commentPost);
app.get("/api/comments", getAllComments);
app.get("/api/users", getAllUsers );


app.listen(PORT, () => console.log('Listening on port: ', PORT));

