// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getAccessTag function
describe("getAccessTag Test", function() {
    var parameters = {
        id: 'lycoiU1T4v8YFdGK'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getAccessTag(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the postAccessTag function
describe("postAccessTag Test", function() {
    var parameters = {
        name: 'new Access Tag',
        description: 'new access tag description',
        default: 'y'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.postAccessTag(parameters, function(statusCode, document) {
            status = statusCode;
            if (status == 400) {
                status = 200;
                    // 400 means the tag already exists
            }
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the putAccessTag function
describe("putAccessTag Test", function() {
    var parameters = {
        id: 'lycoiU1T4v8YFdGK',
        name: 'access tag put'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.putAccessTag(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});
