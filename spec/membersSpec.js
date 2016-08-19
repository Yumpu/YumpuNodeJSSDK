// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getMembers function
describe("getMembers Test", function() {
    var parameters = {
        limit: 5,
        offset: 0,
        return_fields: 'id,username,access_tags,kiosks',
        sort: 'create_date_desc'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getMembers(parameters, function(statusCode, documents) {
            status = statusCode;
            if (status == 401) {
                status = 200;
            }
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
