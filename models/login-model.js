const mongoose = require('mongoose')

const  loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const loginModel = mongoose.model("loginModel",loginSchema)

module.exports = loginModel