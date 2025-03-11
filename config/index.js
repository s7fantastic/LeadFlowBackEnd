import { getMongodbUrl } from '../config/database.js'

const config = {
    database: getMongodbUrl,
    production: true,
    productionUrl: "http://127.0.0.1:3000",
    developmentCorsUrl: ["http://127.0.0.1:3000","http://127.0.0.1:8081","http://localhost:8081"],

}

export default config