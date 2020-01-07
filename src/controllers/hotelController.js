import Hotels from '../models/hotel'
import mongoose from 'mongoose'

export const lists = () => {
    let results = Hotels.find()
    return results
}

export const findById = (id) => {
    let results = Hotels.findById({_id: id})
    return results
}

export const deleteById = (id) => {
    let results = Hotels.findOneAndDelete({_id: id})
    return results
}

export const updateHotel = (id, data) => {
    let results = Hotels.findOneAndUpdate({_id: id}, {$set: data})
    return results
}

export const addHotel = (data) => {
    const hotel = new Hotels({
        _id: new mongoose.Types.ObjectId(),
        name: data.name,
        description: data.description
    })

    hotel.save()
        .then(results => {
            console.log(results)
        })
        .catch(error => {
            console.log(error)
        })

    return 'added hotel'
}