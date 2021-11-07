"use strict";

const supertest = require("supertest");
const env = require("dotenv").config();
const list = supertest(process.env.listuser);
// const postData = require("../data/postData.json");

const listUser = (i) =>
  list
    .get("")
    .query({ page: i })
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");

const singleuser = (j) =>
  list
    .get("/" + j)
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");

module.exports = {
  listUser,
  singleuser,
};
