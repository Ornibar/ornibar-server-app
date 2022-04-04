const express = require("express");
const router = express.Router();
const axios = require('axios');

// const environment = require('../environments/environment');

require('dotenv').config()

// User Login
router.post("/login", (req, res) => {
  // Params
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  let credentials = {
    email: email,
    password: password
  }

  axios.post(process.env.WEB_API_URL+'/auth/login', credentials)
  .then(function (response) {
    // console.log(response.data);
    return res.status(response.status).json(response?.data)
  })
  .catch(function (error) {
    // console.log(error.response?.data);
    return res.status(error.response.status).json(error.response?.data)
  });
});


// User Register
router.post("/register", (req, res) => {
  // Params
  const firstname = req.body.firstname.trim();
  const lastname = req.body.lastname.trim();
  const username = req.body.username.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const cPassword = req.body.password_confirmation.trim();

  let userData = {
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    password: password,
    password_confirmation: cPassword,

  }

  axios.post(process.env.WEB_API_URL+'/auth/register', userData)
  .then(function (response) {
    // console.log(response.data);
    return res.status(response.status).json(response?.data)
  })
  .catch(function (error) {
    // console.log(error.response?.data);
    return res.status(error.response.status).json(error.response?.data)
  });
});


// User Reset Password
router.post("/reset-password", (req, res) => {
  // Params
  const email = req.body.email.trim();

  axios.post(process.env.WEB_API_URL+'/auth/reset-password', {email: email})
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
