describe("DocumentsTest", function() {

    // include yumpu sdk
    var yumpu = require('../yumpu');
    var data = '';
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocuments(data, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });


    it("return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
