const express = require('express')
const app = express()
import * as dotenv from 'dotenv'
dotenv.config()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
})
