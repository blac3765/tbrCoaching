const express = require("express");
const app = express();
const cors = require("cors");

// Serve only the static files form the dist directory
app.use("/", express.static("./client/dist/tbr-coaching"));
app.use(cors());

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
