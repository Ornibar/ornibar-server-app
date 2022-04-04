const express = require("express");
const router = express.Router();
const axios = require('axios');

// const environment = require('../environments/environment');

require('dotenv').config()

// User Prodfile
router.post("/questions", (req, res) => {
    //Params
    const numberQuestions = req.body.numberQuestions.trim();

    axios.post(process.env.WEB_API_URL+'/question/questions', {numberQuestions: numberQuestions}, {
        headers: {
            Authorization: req.headers?.authorization
        }
    })
    .then(function (response) {
        // console.log(response.data);
        return res.status(response.status).json(response?.data)
    })
    .catch(function (error) {
        // console.log(error.response?.data);
        return res.status(error.response.status).json(error.response?.data)
    });
});

module.exports = router;
