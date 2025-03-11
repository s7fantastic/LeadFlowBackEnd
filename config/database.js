export const getMongodbUrl = (status)=>{
    if (status === false) {
        return "mongodb://127.0.0.1:27017/projectDB"
    }
    else {
        // return "mongodb://root:7Bt5NOP1HmewedW1Eu4VWlE1@honardooz:27017/honardooz?authSource=admin"
    }
}

