const errorResponse = require('./responses/error.js')
const largeResponse = require('./responses/large.js')
const smallResponse = require('./responses/small.js')
const express = require('express')

const PORT = process.env.PORT !== undefined ? process.env.PORT : 3001
const HOST = process.env.HOST !== undefined ? process.env.HOST : 'localhost'

const app = express()

app.get('/small', (req, res, next) => {
    res.status(200).json(smallResponse)
});

app.get('/large', (req, res, next) => {
    res.status(200).json(largeResponse)
});

app.get('/error', (req, res, next) => {
    res.status(408).json(errorResponse)
});

app.listen(PORT, HOST, (error) => {
    if (error) {
        console.error(error)
        return;
    }

    console.log(`Listening on port ${PORT}...`)
})
