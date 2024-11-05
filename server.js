const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const users = [
  {
    name: "hsdch",
    id: 1,
  },
  {
    name: "sdhchiao",
    id: 2,
  },
];
app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, "secret", (err) => {
    if (err) {
      res.send("invalid token");
    }
  });
  if (token) {
    res.send(users);
  } else {
    res.send("not authorization");
  }
});
app.post("/login", (req, res) => {
  const body = req.body;
  const token = jwt.sign(body, "secret");
  res.send(token);
});
app.listen(8080, console.log("Your port is 8080"));
