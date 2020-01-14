const express = require("express");
const HttpStatus = require("http-status-codes");

const constants = require("../constants");

const router = express.Router({ mergeParams: true });

const menu = (req, res) => res.status(HttpStatus.OK).json(constants.MENU);

router.get("/", menu);

module.exports = router;
