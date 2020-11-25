const express = require('express');
const { identifyDNA } = require('../controllers/mutation.controller');

const mutationRouter = express.Router();

mutationRouter.post("/", identifyDNA);

module.exports = {
    mutationRouter
}
