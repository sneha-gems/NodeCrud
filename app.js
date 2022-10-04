const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const register = require('./routes/register')
const userData = require('./routes/usersData')

const port = 3002
const app = express()

const databaseUrl = 'mongodb://localhost:27017'

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
// app.use(cookieParser());


//connecting with database
const initiateMongoo = async() => {
    try {
        await mongoose.connect(databaseUrl,{
            useNewUrlParser: true
          })
        console.log('Connecting to database')
        
    } catch (error) {
        throw error
        
    }
    
}
initiateMongoo()

app.use('/', register)
app.use('/', userData)

app.get('/', (req, res) => {
    res.send('hii, I am working fine!')
})


app.listen(port, function(){
    console.log('server listening at port 3002')
})