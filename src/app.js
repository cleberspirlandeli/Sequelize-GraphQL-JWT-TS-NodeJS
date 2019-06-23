require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('teste', (req, res, next) => {
    res.status(200).send('ok');
})


// Option 1: Passing parameters separately
const sequelize = new Sequelize(
    process.env.PG_DATABASE,        // database
    process.env.PG_USER,            // username
    process.env.PG_PASSWORD,        // password
    {
        host: process.env.PG_HOST,  // localhost
        dialect: 'postgres'
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


app.listen(process.env.PORT, () => {
    console.log('rodando porta ' + process.env.PORT);
});