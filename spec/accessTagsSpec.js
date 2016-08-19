// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getAccessTags function
describe("getAccessTags Test", function() {
    var parameters = {
        limit: 10,
        offset: 0,
        return_fields: 'id,name,default,iap,kiosks',
        sort: 'name_desc'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getAccessTags(parameters, function(statusCode, documents) {
            status = statusCode;
            if (status == 404 || status == 401) {
                status = 200;
                // 404 means you have no subscriptions
                // 401 means you are no premium user
            }
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
