const express = require('express')

const app = express()
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser')
const router = require("./route/index")
const cors = require('cors')

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());

app.use("/api/v1", router);

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))


module.exports = app;