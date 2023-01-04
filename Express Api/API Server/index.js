const express = require("express");
const cors = require("cors");

let users = require("./data/data.js"); // Data list

const app = express();

// Utlility functions

const checkRequest = (req) => {
  if (req.body.fullName == undefined || req.body.age == undefined) return true;
};

// Title - Middleware

app.use(cors()); // Eliminates cors error
app.use(express.json()); // Parses the req body // ? Bt why

// Title - Get requests

app.get("/api", (req, res) => {
  res.send("Server is up and running on PORT 3001");
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

// Title -  Post requests

app.post("/api/users/add", (req, res) => {
  if (checkRequest(req))
    return res.status(400).send({
      status: 400,
      code: "MISSING_PARAMS",
      error: "Missing parameters",
    });
  const { fullName, age } = req.body;
  users = [
    ...users,
    {
      id: users.length + 1,
      fullName,
      age,
    },
  ];
  res.send("User added successfully");
  // Todo - Store this data in database or elsewhere
});

// Title - Update / put requests

app.put("/api/users/:id", (req, res) => {
  users.map((user) => {
    if (user.id == req.params.id) {
      req.body?.fullName ? (user.fullName = req.body.fullName) : user.fullName;
      req.body?.age ? (user.age = req.body.age) : user.age;
    }
  });
  res.send("User updated successfully");
});

// Title - Delete requests

app.delete("/api/users/:id", (req, res) => {
  users.map((user, i) => {
    if (user.id == req.params.id) {
      users.splice(i, 1);
    }
  });
  console.log(users);
  res.send("User Deleted successfully");
});

app.listen(3001);
