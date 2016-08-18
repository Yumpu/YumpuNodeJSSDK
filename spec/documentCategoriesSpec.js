// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getDocumentProgress function
describe("getDocumentProgress Test", function() {
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocumentCategories(function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
