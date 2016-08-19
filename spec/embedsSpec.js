// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getEmbeds function
describe("getEmbeds Test", function() {
    var parameters = {
        limit: 2,
        offset: 0,
        sort: 'desc'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getEmbeds(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
