const express = require('express')
const route = express.Router()
const User = require('../models/user-schema')


route.get('/data', async (req, res) => {
    const data = await User.find();
    res.json(data)
})


route.get('/data/:id', async (req, res) => {
    const data = await User.findById(req.params.id)
    res.json(data)
})


module.exports = route