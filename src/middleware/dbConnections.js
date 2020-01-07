import mongoose from 'mongoose'
import {configs} from '../config/global'

function runMongoDb() {

    mongoose.connect(configs.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })

    mongoose.Promise = global.Promise
    const db = mongoose.connection

    db.on('error', (error) => {
        throw error
    })

    db.once('open', () => {
        console.log('Connection with database succeeded')
    })
}

function runMySql() {
    console.log("create mysql connection")
}

const conn = {
    runMongoDb,
    runMySql
}

export default conn
