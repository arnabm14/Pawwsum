const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/dist"));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port);

// Refer https://codeburst.io/deploy-your-webpack-apps-to-heroku-in-3-simple-steps-4ae072af93a8 to learn deployment of webpack based app to heroku
