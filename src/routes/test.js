const express = require('express');

// const PostController = require('../controller/PostController');

const routes = express.Router();

routes.get('/hello', () => {'hello world'});

module.exports = routes;