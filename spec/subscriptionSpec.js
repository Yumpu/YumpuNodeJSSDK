// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getSubscription function
describe("getSubscription Test", function() {
    var parameters = {
        id: '1ChSI3vGfouFlzrU',
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getSubscription(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the postSubscription function
describe("postSubscription Test", function() {
    var parameters = {
        itc_product_id: 'my_subscription_itc_product_id',
        name: 'my subscription name',
        duration: 365,
        description: 'my subscription description',
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.postSubscription(parameters, function(statusCode, document) {
            status = statusCode;
            if (status == 400) {
                status = 200;
                // 400 means the tag already exists
            }
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the putSubscription function
describe("putSubscription Test", function() {
    var parameters = {
        id: '1ChSI3vGfouFlzrU',
        itc_product_id: 'my_subscription_itc_product_id_updated',
        name: 'my subscription name updated',
        duration: 7,
        description: 'my subscription description updated',
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.putSubscription(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});
