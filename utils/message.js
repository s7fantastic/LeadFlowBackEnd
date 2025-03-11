import db from "./db.js";

export const successMessage = async (res, message) => {
    await db.disconnect()
    res.send({ message: `${message} was successfully done ` })
    return;
}

export const failMessage = async (res, message, error) => {
    await db.disconnect()
    res.send({ error: `${message} faced an issue ${error}` })
    return;
}

export const sendDataToClient = async (res, data) => {
    await db.disconnect()
    res.send(data)
    return;
}



