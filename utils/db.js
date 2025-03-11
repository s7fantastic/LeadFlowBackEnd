import mongoose from 'mongoose'
import config from '../config/index.js'

const connection = {}

async function connect() {
    // if (connection.isConnected) {
    //     console.log('already connected');
    // }
    // if (mongoose.connections.length > 0) {
    //     connection.isConnected = mongoose.connections[0].readyState;
    //     if (connection.isConnected === 1) {
    //         console.log('use previous connection');
    //         return;
    //     }
    //     await mongoose.disconnect();
    // }
    const db = await mongoose.connect(config.database(config.production)).catch((err) => console.log(err));
    // console.log('new connection');
    connection.isConnected = db.connections[0].readyState;
    return
}

async function disconnect() {
    // if (connection.isConnected) {
    //     if (config.production == true) {
    //         await mongoose.disconnect();
    //         connection.isConnected = false;
    //     } else {
    //         console.log('not disconnected');
    //     }
    // }
    return
}

const db = { connect, disconnect };
export default db;