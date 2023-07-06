const express = require("express")
const connectionToDb = require("./config/connections")
const bookRoute = require("./controllers/book.controller")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/book", bookRoute)

app.listen(3001,async ()=>{
    try {
        await connectionToDb
        console.log("connected to db")
        console.log("connected to server")
    } catch (error) {
        console.log(error);
    }
   
})