require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('HELLO WORLD')
})

app.listen(PORT, () => console.log(`Server live on port: ${PORT}`))

module.exports = app