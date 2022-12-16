const express = require("express")
const morgan = require("morgan")
const cron = require("node-cron")
const routes = require('./routes/routes.js')


const NewsCron = require("./controllers/controllersDaily")


const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)

app.listen(21262, () => {
    console.log("Express: http://localhost:21262")
    cron.schedule("0 0 15 * * *", NewsCron.getNoticias)
})