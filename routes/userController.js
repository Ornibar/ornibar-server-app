const express = require("express");
const router = express.Router();
const axios = require('axios');

// const environment = require('../environments/environment');

require('dotenv').config()

// User Prodfile
router.get("/profile", (req, res) => {
    axios.get(process.env.WEB_API_URL+'/user/profile', { 
        headers: {
            Authorization: req.headers?.authorization
        }})
    .then(function (response) {
        // console.log(response.data);
        return res.status(response.status).json(response?.data)
    })
    .catch(function (error) {
        // console.log(error.response?.data);
        return res.status(error.response.status).json(error.response?.data)
    });
});

// Scores Users
router.get("/users-scores", (req, res) => {
    // Query
    const limit = req.query.limit;
    const direction = req.query.direction;

    axios.get(process.env.WEB_API_URL+'/user/users-scores', { params : {limit: limit, direction: direction} })
    .then(function (response) {
        // console.log(response.data);
        return res.status(response.status).json(response?.data)
    })
    .catch(function (error) {
        // console.log(error.response?.data);
        return res.status(error.response.status).json(error.response?.data)
    });
});


// User Update Profile
router.put("/update-profile/:id", (req, res) => {
    // Params
    const idUser = req.params.id;
    const username = req.body.username.trim();
    const email = req.body.email.trim();

    let userData = {
        username: username,
        email: email,
    }

    axios.put(process.env.WEB_API_URL+'/user/update-profile/'+idUser, userData, {
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


// User Update Profile
router.put("/update-score/:id", (req, res) => {
    // Params
    const idUser = req.params.id;
    const score = req.body.score.trim();

    axios.put(process.env.WEB_API_URL+'/user/update-score/'+idUser, {score: score}, {
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


// User Update Profile Image
router.post("/update-profile-image/:id", (req, res) => {
    // Params
    const idUser = req.params.id;
    const file = req.body.file;

    axios.post(process.env.WEB_API_URL+'/user/update-profile-image/'+idUser, {file: file}, {
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

// User Update Password
router.put("/update-password/:id", (req, res) => {
    // Params
    const idUser = req.params.id;
    const password = req.body.password;
    const passwordConfirmation = req.body.password_confirmation;

    let credentials = {
        password: password,
        password_confirmation: passwordConfirmation
    }

    axios.put(process.env.WEB_API_URL+'/user/update-password/'+idUser, credentials, {
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


// User Update Profile Image
router.delete("/destroy/:id", (req, res) => {
    // Params
    const idUser = req.params.id;

    axios.delete(process.env.WEB_API_URL+'/user/destroy/'+idUser, {
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
