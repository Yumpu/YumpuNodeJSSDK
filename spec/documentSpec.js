describe("DocumentTest", function() {

    // include yumpu sdk
    var yumpu = require('../yumpu');
    var data = {
        id: 55834590,
        return_fields: 'id,create_date,update_date,url,image_small'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocument(data, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });


    it("return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
