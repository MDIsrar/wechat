const mongoose = require("mongoose")

const mongoUrl = "mongodb://127.0.0.1:27017/chatapp"

console.log("mongoUrl", mongoUrl);
mongoose.connect(mongoUrl)

const connection = mongoose.connection

connection.on("connected", () => {
    console.log(`DB Server connected ${connection.host}`.cyan.underline)
})