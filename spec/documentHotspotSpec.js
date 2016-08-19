// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getDocumentHotspot function
describe("getDocumentHotspot Test", function() {
    var parameters = {
        id: 'b894ded0ozsm8TP6',
        return_fields: 'id,document_id,page,type,settings,create_date,update_date'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocumentHotspot(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
