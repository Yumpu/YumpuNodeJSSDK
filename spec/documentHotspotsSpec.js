// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getDocumentHotspots function
describe("getDocumentHotspots Test", function() {
    var parameters = {
        id: 55858527,
        limit: 1,
        sort: 'create_date_desc',
        return_fields: 'id,page,type,settings'
    };
    var status;
    var data;
    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocumentHotspots(parameters, function(statusCode, documents) {
            status = statusCode;
            data = documents;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
