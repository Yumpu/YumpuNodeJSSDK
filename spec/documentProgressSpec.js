// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getDocumentProgress function
describe("getDocumentProgress Test", function() {
    var parameters = {
        id: 'f4c4d-afdc5-b7429-a83d6-48c4f-c39dc-1110b-34ba2'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocumentProgress(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
