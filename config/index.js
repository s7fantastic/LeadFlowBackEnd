import { getMongodbUrl } from '../config/database.js'

const config = {
    database: getMongodbUrl,
    production: true,
    productionUrl: "https://honardooz.com",
    developmentCorsUrl: ["http://127.0.0.1:3000","http://127.0.0.1:8081","http://localhost:8081"],
    domain: "honardooz.com",

}

export default config