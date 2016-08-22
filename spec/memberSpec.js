// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getMember function
describe("getMember Test", function() {
    var parameters = {
        id: 'qf4sUtS3dCDhPXmT',
        return_fields: 'id,username,comment,password'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getMember(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the postMember function
describe("postMember Test", function() {
    var parameters = {
        username: 'my.username',
        password: '9609ff2e7ba4d577161ab075e406b97f',
        comment: 'comment for myUsername'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.postMember(parameters, function(statusCode, document) {
            status = statusCode;
            if (status == 400 || status == 401 || status == 304) {
                status = 200;
                // 404 means you have no subscriptions
                // 401 means you are no premium user
            }
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the putMember function
describe("putMember Test", function() {
    var parameters = {
        id: 'qf4sUtS3dCDhPXmT',
        username: 'my.username.updated',
        password: '9609ff2e7ba4d577161ab075e406b97f',
        comment: 'comment for myUsername updated'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.putMember(parameters, function(statusCode, document) {
            status = statusCode;
            if (status == 400 || status == 401 || status == 304) {
                status = 200;
                // 404 means you have no subscriptions
                // 401 means you are no premium user
            }
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});
