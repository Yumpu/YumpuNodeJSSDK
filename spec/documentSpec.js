// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getDocument function
describe("getDocument Test", function() {
    var parameters = {
        id: 55834590,
        return_fields: 'id,create_date,update_date,url,image_small'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocument(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the postDocumentUrl function
describe("postDocumentUrl Test", function() {
    var parameters = {
      'title': 'Sieggggggg',
      'url': 'http://www.onlinemarketing-praxis.de/uploads/pdf/suchparameter-google-uebersicht.pdf'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.postDocumentUrl(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 202", function(done) {
        expect(status).toBe(202);
        done();
    });
});
