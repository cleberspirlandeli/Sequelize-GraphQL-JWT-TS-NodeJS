require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/teste', (req, res, next) => {
    res.status(200).send('ok');
})






/*
*
*
*
*
*/

const sequelize = new Sequelize(
    'sequelize', // database
    'postgres',  // user
    '12345678',  // password
    {
        host: 'localhost',  // domain
        dialect: 'postgres' // type database
    }
);

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [3, 10],
                msg: "Nome precisa ter entre 3 e 10 caracteres"
            }
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isAfter: {
                args: '2000-01-01',
                msg: 'Idade precisa ser acima de 2000'
            }
        }
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    obs: {
        type: Sequelize.TEXT,
    },
    number: {
        type: Sequelize.INTEGER
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});


User.sync()


User.create({
    name: 'Cleber Rezende',
    phone: '991696717',
    age: '2001/12/18',
    email: 'contato@gmail.com',
    number: 1
})




/*
*
*
*
*
*/






app.listen(process.env.PORT, () => {
    console.log('rodando porta ' + process.env.PORT);
});