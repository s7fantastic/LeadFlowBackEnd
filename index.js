import express from "express";
import cors from 'cors'
import config from './config/index.js'
import router from './src/routes/index.js'
import cookieParser from 'cookie-parser'
import db from "./utils/db.js";
import { sendSmsToOne } from "./utils/sms.js";
import { agenda } from "./utils/dbJob.js";

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

/* ------------------------------- زمان بندی------------------------------- */

// agenda.on("ready", async () => {
  // console.log('agenda is ready');
  // ---------------------------تعریف تابع ارسال پیامک ----------------------
  // agenda.define('send_sms', async (job) => {
    // -------------------------استخراج پارامتر از  فراخوانی زمانبند----------------
    // const { receptor, message } = job.attrs.data;
    // if (receptor) {
      // -----------------کتابخانه ار سال پیامک ---------------------
      // sendSmsToOne(message, receptor)
    // }
  // })
  //  ---------------------------شروع به کار زمانبند---------------------
  // agenda.start();
// });

// -------------------------------هندل کردن خطا های پیش بینی نشده در اکسپرس --------------------
app.use((error, request, response, next) => {
  console.log(`error ${error.message}`)
  const status = error.status || 400
  response.status(status).send(error.message)
});

/* ------------------------------- server run ------------------------------- */

const port = config.production === true ? 80 : 4000
app.listen(port, () => console.log(`Server running on port:${port}`));
