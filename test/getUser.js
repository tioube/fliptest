"use strict";

const assert = require("chai").expect;
const tv4 = require("tv4");
const { expect } = require("chai");
const user = require("../page/getUser.js");
const listSchema = require("../schema/listUserSchema.json");

function delay(interval) {
  return it("should delay", (done) => {
    setTimeout(() => done(), interval);
  }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}

describe(`Get List Data User`, () => {
  before(async () => {
    try {
      this.data = await user.listUser(2);
      // console.log(this.data.body);
      //   global.auth = await this.data.body.access_token;
      //   console.log(this.data);
    } catch (err) {
      console.error(err);
    }
  });

  it("get List User", async () => {
    // console.log(this.data.body);
    assert(this.data.statusCode).to.equal(200);
  });
  it("Schema is Valid", async () => {
    expect(tv4.validate(this.data.body, listSchema)).to.be.true;
  });
});

describe(`Get Single Data User`, () => {
  before(async () => {
    try {
      this.data = await user.singleuser(1);
      console.log(this.data.body);
      //   global.auth = await this.data.body.access_token;
      //   console.log(this.data);
    } catch (err) {
      console.error(err);
    }
  });

  it("get single User", async () => {
    // console.log(this.data.body);
    assert(this.data.statusCode).to.equal(200);
  });
  it("Email not null", async () => {
    // console.log(this.data.body);
    assert(this.data.body.data.email).to.not.equal(null);
  });
  it("Avatar not null", async () => {
    // console.log(this.data.body);
    assert(this.data.body.data.avatar).to.not.equal(null);
  });
});
