// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getCollection function
describe("getCollection Test", function() {
    var parameters = {
        id: 'IjCASOos9NBgQqtb',
        return_fields: 'id,create_date,update_date,name,order,sections'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getCollection(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

// Test for the postCollection function
describe("postCollection Test", function() {
    var parameters = {
        name: 'myNewCollection'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.postCollection(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

// Test for the putCollection function
describe("putCollection Test", function() {
    var parameters = {
        id: 'IjCASOos9NBgQqtb',
        name: 'Meine Sammlung'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.putCollection(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
