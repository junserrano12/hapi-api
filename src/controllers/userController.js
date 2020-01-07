import Users from '../models/users'
import mongoose from 'mongoose'

export const addUser = (data) => {
    const user = new Users({
        _id: new mongoose.Types.ObjectId(),
        username: data.username,
        email: data.email,
        password: data.password
    })

    user.save()
        .then(results => {
            console.log(results)
        })
        .catch(error => {
            console.log(error)
        })

    return 'added user'
}