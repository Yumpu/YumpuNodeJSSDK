// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the search function
describe("search Test", function() {
    var parameters = {
        q: 'MyDocument',
        in: 'title'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.search(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
