// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getDocuments function without limit or offset
describe("getDocuments Test without limit or offset", function() {
    var parameters = '';
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocuments(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

// Test for the getDocuments function with limit and offset
describe("getDocuments Test with limit and offset", function() {
    var parameters = {
        limit: 1,
        offset: 0
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocuments(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
