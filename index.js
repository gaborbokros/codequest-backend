import "dotenv/config";
const { PORT, MONGO_URI, APIKEY } = process.env;

import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

// Connect to database
import connectDatabase from "./database/connect.database.js";
connectDatabase(MONGO_URI);

// Authentication middleware
import isAuthenticated from "./middleware/isAuthenticated.middleware.js";
app.use(isAuthenticated(APIKEY));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error handler
import errorHandler from "./middleware/errorHandler.middleware.js";
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`[SERVER] Server running: http://localhost:${PORT}`)
);
