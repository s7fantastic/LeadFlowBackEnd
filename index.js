import express from "express";
import cors from 'cors'
import config from './config/index.js'
import router from './src/routes/index.js'
import cookieParser from 'cookie-parser'
import db from "./utils/db.js";

/* --------------------------------- express -------------------------------- */

const app = express();

/* ---------------------------------- cors ---------------------------------- */

let corsOptions = {}
if (config.production === false) {
  corsOptions = {
    origin: config.developmentCorsUrl,
    credentials: true
  };
}
else if (config.production === true) {
  corsOptions = {
    origin: config.productionUrl,
    credentials: true
  };
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true,limit: '60mb' }));
app.use(express.json({limit: '60mb'}));

/* --------------------------------- routes --------------------------------- */

db.connect()
app.use("/api", router);
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

/* ------------------------------- Handling unexpected errors in Express ------------------------------- */
app.use((error, request, response, next) => {
  console.log(`error ${error.message}`)
  const status = error.status || 400
  response.status(status).send(error.message)
});

/* ------------------------------- server run ------------------------------- */

const port = config.production === true ? 80 : 4000
app.listen(port, () => console.log(`Server running on port:${port}`));
