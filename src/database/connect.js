const Sequelize = require('sequelize');

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
            isAfter: "2000-01-01"
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

User.sync({ force: true })
// module.exports = sequelize;