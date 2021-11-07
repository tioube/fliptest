"use strict";

const supertest = require("supertest");
const env = require("dotenv").config();
const postUser = supertest(process.env.postuser);
const postData = require("../data/postData.json");

const createUser = () =>
  postUser
    .post("")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send(postData);

module.exports = {
  createUser,
};
