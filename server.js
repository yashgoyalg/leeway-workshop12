require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const movieRoutes = require("./routes/movies");
const cors = require("cors");
const app = express();

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

const port = process.env.PORT || 8080;  //define port variable its value can be port defined in enviroment or 8080 
app.listen(port, () => console.log(`Listening on port ${port}...`));  //listen our app
