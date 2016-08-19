// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getCollections function
describe("getCollections Test", function() {
    var parameters = {
        limit: 2,
        offset: 0,
        return_fields: 'id,create_date'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getCollections(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
