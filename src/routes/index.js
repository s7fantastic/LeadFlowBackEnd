import express from "express";
import homeRoutes from "./lead/index.js";

const app = express()

app.use("/lead", leadRoutes);

export default app