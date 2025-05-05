const express = require("express") //Import express using the require key word
const app = express()

app.get("/", (req, res) =>{
    res.send("hello")
});

app.listen(process.env.Port || 3000, () => {
    console.log("Web server is listening at " + (process.env.Port || 3000))
});