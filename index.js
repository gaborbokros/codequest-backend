import "dotenv/config";
const { PORT, MONGO_URI } = process.env;

import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

// Connect to database
import connectDatabase from "./database/connect.database.js";
connectDatabase(MONGO_URI);

// Error handler
import errorHandler from "./middleware/errorHandler.middleware.js";
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`[SERVER] Server running: http://localhost:${PORT}`)
);
