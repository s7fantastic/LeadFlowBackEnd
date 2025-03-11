import { getMongodbUrl } from '../config/database.js'

const config = {
    database: getMongodbUrl,
    production: false,
    productionUrl: "https://honardooz.com",
    developmentCorsUrl: ["http://127.0.0.1:3000","http://127.0.0.1:8081","http://localhost:8081"],
    domain: "honardooz.com",
    secretId: "hoadclvwiqovi!uasas",
    adminSenderPhonenumber: "90002610",
    adminReceptorPhonenumber: "09138677347",
    cookieExpired: "400d",
    scorePerPrice: 100000,
    userScoreForLucky: 15,
    baseUrlBazzar:'https://pardakht.cafebazaar.ir/devapi/v2/',
    paymentGatewayRequestUrl:"https://www.zarinpal.com/pg/rest/WebGate/PaymentRequest.json",
    paymentGatewayVerificationUrl:"https://www.zarinpal.com/pg/rest/WebGate/PaymentVerification.json",
    paymentGatewayCallbackURL:"https://api.honardooz.com/api/home/online-payment/callback",
    paymentGatewayMerchantID:"e6e367f0-c4e0-4d67-b5cf-f4c9b99e01d6",
    paymentGatewayStartPay:"https://www.zarinpal.com/pg/StartPay/",
    smsApiKey: "34546C6B795041365456533767756C3475685230354E3938796442476B5555533237317132495A357831303D"
}

export default config