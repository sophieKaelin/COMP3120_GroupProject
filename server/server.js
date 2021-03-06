require("dotenv").config()
const http = require("http")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const apiRouter = require("./api")
const IMDBRouter = require("./imdbApi")
const userRouter = require("./userRouter")

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("build"))

app.use(apiRouter)
app.use(IMDBRouter)
app.use(userRouter)

const path = require("path")
app.get("*", (request, response) => {
	response.sendFile(path.join(__dirname, "../build/index.html"))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
