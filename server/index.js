const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const port = 8080

app.use(cors())


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nowa_06.03.23"
})

con.connect(function(err){
    if (err) console.log(err)
    else console.log("Połączono z bazą danych")
})

app.get('/', (req, res) => {
    res.send("ok /")

    console.log("ok /")
})

app.listen(port, () => {
    console.log(`aplikacja działa na porcie: ${port}`)
})