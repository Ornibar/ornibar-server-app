const express = require("express");
const router = express.Router();
const axios = require('axios');
require('dotenv').config()

// Questions with responses
router.get("/questions", (req, res) => {
    // Query
    const limit = req.query.limit;

    axios.get(process.env.WEB_API_URL+'/question/questions', { params: { limit: limit} })
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
