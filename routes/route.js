const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_THINK = process.env.API_THINK;
const API_GOOGLE = process.env.API_GOOGLE;

router.get("/dist", async (req, res) => {
  const apiRes = await needle(
    "get",
    `https://api.thingspeak.com/channels/1437601/fields/1.json?api_key=${API_THINK}&results=1`
  );
  const data = apiRes.body;
  res.status(200).json(data);
});
router.get("/humo", async (req, res) => {
  const apiRes = await needle(
    "get",
    `https://api.thingspeak.com/channels/1843700/fields/2.json?api_key=${API_THINK}&results=1`
  );
  const data2 = apiRes.body;
  res.status(200).json(data2);
});
router.get("/", async (req, res) => {
  const apiRes = await needle(
    "get",
    `https://api.thingspeak.com/channels/1843700/feeds.json?api_key=XAVVC5UVZA4BDZXM&results=400`
  );
  const data2 = apiRes.body;
  res.status(200).json(data2);
});

module.exports = router;
