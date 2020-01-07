import mongoose from 'mongoose'
const {Schema} = mongoose

const usersSchema = new Schema({
    _id: String,
    username: String,
    password: String,
    email: String
})

module.exports = mongoose.model("users", usersSchema, 'userList')