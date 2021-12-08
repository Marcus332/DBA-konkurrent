// Opretter forbindelse til Express
const express = require("express");
const cors = require("cors");
const app = express();

// Definerer Controllers
const userController = require("./src/controllers/user-controller");
const varerController = require("./src/controllers/vare-controller");

// Opretter forbindelse til Port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static("./src/views"));

// Omdanner koden som en string så serveren kan læse den = JSON
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userController);
app.use("/varer", varerController);

// Start server
app.listen(PORT, console.log("Server is running"));
