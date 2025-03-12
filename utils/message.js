import db from "./db.js";

export const successMessage = async (res, message) => {
    await db.disconnect()
    res.send({ successMessage: `${message} was successfully done `, status: false })
    return;
}

export const failMessage = async (res, message) => {
    await db.disconnect()
    res.send({ errorMessage: `${message}` })
    return;
}

export const sendDataToClient = async (res, data) => {
    await db.disconnect()
    res.send(data)
    return;
}



