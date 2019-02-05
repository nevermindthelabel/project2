var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("POST /api/users", function() {
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should save a user", function(done) {
    var reqBody = {
      userName: "Example Name",
      password: "example"
    };

    request
      .post("/api/users")
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        var reqBodyEnc = {
          userName: reqBody.userName
        };
        expect(responseBody)
          .to.be.an("object")
          .that.includes(reqBodyEnc);

        done();
      });
  });
});
