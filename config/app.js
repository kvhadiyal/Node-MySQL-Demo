require("./winston");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const l10n = require("jm-ez-l10n");
const _ = require("lodash");

// Set up the express app
const app = express();

l10n.setTranslationsFile("en", "./language/translation.en.json");
global.l10n = l10n;
global._ = _;

global.config = require("./config");
global.models = require("../db/models");

app.use(l10n.enableL10NExpress);
app.use(bodyParser.urlencoded({ limit: "2gb", extended: true }));
app.use(bodyParser.json({ limit: "2gb", extended: true }));
app.use(cors());

app.use(express.static(__dirname + "public"));

// Require our routes into the application.
app.use(require("../routes"));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.all("/*", (req, res) => {
  return res.status(404).json({
    errors: { msg: req.t("INVALID_REQUEST") },
    status: false,
  });
});

module.exports = app;
