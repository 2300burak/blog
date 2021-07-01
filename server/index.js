import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import postRoute from "./routers/posts.js"

const app = express()

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors())
dotenv.config()
app.get("/", (req, res) => {
    res.send("burak")
})
app.get("/brks", (req, res) => {
    res.send("brksbss")
})

app.use("/posts",postRoute)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
 app.listen(PORT,()=>{
 console.log(`${PORT} portu inleniyor`)
 })
})
.catch((err)=>{
console.log(err)
})

