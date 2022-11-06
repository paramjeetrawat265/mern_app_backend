const express = require("express");
const { Connection } = require("./Config/db");
const { loginRouter } = require("./Router/login.router");
const { signRouter } = require("./Router/signup.router");
const { todoRouter } = require("./Router/Todo.Router");
const app = express();
require("dotenv").config();
const cors=require("cors");
const PORT = process.env.PORT;
app.use(express.json());

const corsOptions = { 
    origin: 'https://mern-backend-s3rq.onrender.com', 
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}; 
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Homepage")
});

app.use("/signup",signRouter)

app.use("/login", loginRouter)

app.use("/todos",todoRouter)

app.listen(PORT, async () => {
    try {
        await Connection
        console.log("Connection is established");
    }
    catch (err) {
        console.log("Connection is not established");
        console.log(err)
    }
    console.log(`port is listening on ${PORT}`);
})