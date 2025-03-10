import "dotenv/config";
const { PORT } = process.env;

import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));