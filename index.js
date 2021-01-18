const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')

mongoose.connect("mongodb+srv://test-user:fwge4xeDuG23WtN6@testappcluster.nymyb.mongodb.net/testdb?retryWrites=true&w=majority")

const app = express()
app.use(bodyparser.json())
app.use(cors())

app.use('/announcements', require('./routes/announcement') )

app.get('/', (req,res) => {
    res.send({Project: "Mern Crud"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    console.log("Server has been started")
})