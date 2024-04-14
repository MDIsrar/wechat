const express = require("express")
const { chats } = require("./data/data")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors")

const userRouter = require("./routes/userRouter")
const chatRouter = require("./routes/chatRouter")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

const app = express()
app.use(express.json()) // to accept JSON Data
dotenv.config()
app.get("/", (req, res) => {
    res.send("API is running")
})
app.use("/api/user", userRouter)
app.use("/api/chat", chatRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold))