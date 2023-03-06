const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const bodyParser = require("body-parser");

const app = express();

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
app.use(bodyParser.json());

db.on("error",()=>{
    console.log("error while connecting")
});

db.once("open" ,()=>{
    console.log("connected to MongoDB successfully")
});

require("./Routes/userRoutes")(app);

app.listen(8000,()=>{
    console.log(`Application runnung on port ${serverConfig}`);
});
