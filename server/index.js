const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const dotenv = require("dotenv");
dotenv.config();
let PORT ="";

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://merndeploy-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials: true
    }
));

mongoose.connect(`mongodb+srv://nitin64956:${process.env.DB_PASSWORD}@cluster0.36nmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    console.log("email",email);

    UserModel.findOne({email:email})
    .then(user => {
        
        console.log("user",user);
        if (user) {
            
            console.log(user.password,password);
            if (user.password === password) {
                console.log(user.password,password);
                res.json("Success");
            } else {
                res.json("the password is incorrect");
            }
        } else {
            res.json("the password is incorect");
        }
    })
    .catch(err => res.json(err))
})

app.get('/',(req,res) => {
    res.json("Hello login");
})

app.post('/register',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

if (process.env.STATUS === "dev") {
    PORT = process.env.DEV_PORT;
} else {
    PORT = process.env.PROD_PORT;
}
app.listen(PORT,() => {
    console.log("server is running");
})