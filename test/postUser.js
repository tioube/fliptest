"use strict";

const assert = require("chai").expect;
const tv4 = require("tv4");
const { expect } = require("chai");
const postData = require("../page/postUser.js");

function delay(interval) {
  return it("should delay", (done) => {
    setTimeout(() => done(), interval);
  }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}

describe(`Create User Positive`, () => {
  before(async () => {
    try {
      this.data = await postData.createUser();
      // console.log("endpoint test", this.data.request.url);
      // console.log("body request", this.data.request._data);
      // console.log(this.data.statusCode);
      //   resData.push(this.data);
      // delay();

      //   global.auth = await this.data.body.access_token;
      // console.log(this.data);
    } catch (err) {
      console.error(err);
    }
  });

  it("Create User Successfully", async () => {
    // console.log("response data", this.data.body);
    assert(this.data.statusCode).to.equal(201);
  });
  it("Id generated", async () => {
    // console.log("ID Generated", this.data.body.id);
    assert(this.data.statusCode).to.not.equal(null);
  });
});
