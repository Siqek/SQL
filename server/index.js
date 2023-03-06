const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const port = 8080

app.use(cors())

app.get('/', (req, res) => {
    res.send("ok /")

    console.log("ok /")
})

app.listen(port, () => {
    console.log(`aplikacja działa na porcie: ${port}`)
})