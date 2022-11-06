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
app.use(cors())

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