const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
const { userRouter } = require("./routes/user.route")

require("dotenv").config();
const app = express();
app.use(express.json())
app.use(cors());
app.use("/", userRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log(`Connected to the database & Server is running at port ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})