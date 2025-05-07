const bodyParser = require("body-parser");
const express = require("express") //Import express using the require key word
const app = express() //Initialise and store express in variable "app"
const router = express.Router(); //Calls the router function within express

//Middleware
//Router Middleware
app.use((req, res, next) => {
    console.log("Time", Date.now());
    next();
});

//Router MiddleWare
router.use((req, res, next) => {
    console.log("Time", Date.now());
    next();
})

router.use((req, res , next) => {
    res.send("Ok!");
})

//App Middlesware
// app.use((req, res, next) => {
//     res.status(500).send("Something is broken")
// })


//express app handler, handles something .....
app.get("/", (req, res) =>{ 
    res.send("hello")
});

router.get("/home", (req, res) => {
    res.send("Hello World, This is the home router")
})

router.get("/profile", (req, res) => {
    res.send("Hello World, This is the profile router")
})

router.get("/login", (req,res) => {
    res.send("Hello World, This is the login router")
})

router.get("/logout", (req, res) => {
    res.send("Hello World, This is the logout router")
})

app.use(bodyParser.json())

app.use("/", router) //WHY THIS ?

//Uses key word listen to listen to the port whihc in this case is 3000
app.listen(process.env.Port || 3000, () => {
    console.log("Web server is listening at " + (process.env.Port || 3000))
});

//EXPRESSION SESSIONS
