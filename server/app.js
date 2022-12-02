//import dependências
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

//configure env file e require conecction file
dotenv.config({ path: './config.env' });
require('./db/conn');
const port = process.env.PORT;

//require model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const authenticate = require('./middleware/authenticate')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Olá mundo');
})

//Register
app.post('/register', async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        });

        //method save , create user
        const created = await createUser.save();
        console.log(created);
        res.status(200).send('registred');

    } catch (error) {
        res.status(400).send(error)
    }
})

//login user
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Users.findOne({ email: email });
        if (user) {
            const isMatch = await bcryptjs.compare(password, user.password);

            if (isMatch) {
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                res.status(200).send("LoggedIn")
            } else {
                res.status(400).send("invalid credentials")
            }
        } else {
            res.status(400).send("invalid credentials")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

//Message
app.post('/message', async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name: name,
            email: email,
            message: message
        });

        //method save , create user
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send('sent');

    } catch (error) {
        res.status(400).send(error)
    }
})

//Logout page
app.get('/logout', (req, res) => {
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged Out")
})

//Authentication
app.get('/auth', authenticate, (req, res) => {

})

//run server
app.listen(port, () => {
    console.log('Server rodando');
})
