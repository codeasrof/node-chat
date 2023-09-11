const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": "3d17e73b-0afb-48ab-a4d1-57818722e1cc"} }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": process.env.CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
app.listen(3001);