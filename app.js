require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const { User } = require('./app/models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
});


app.post('/users', async (req, res) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password
    });

    res.status(201).json(user);
});


app.get('/users/:id', async (req, res) => {
    
    const { id } = req.params;

    const user = await User.findAll({
        where: {
            id: id
        }
    });
    res.status(200).json(user);
});


app.put('/users/:id', (req, res) => {
    
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = User.update({
        name, 
        email, 
        password
    }, {
        where: {
            id: id
        }
    });

    res.status(200).json(user);

});


app.delete('/users/:id', (req, res) => {
    
    const { id } = req.params;

    const user = User.destroy({
        where: {
            id: id
        }
    });

    res.status(200).json(user);

});


app.listen(process.env.PORT, () => {
    console.log('rodando porta ' + process.env.PORT);
});