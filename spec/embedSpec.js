// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getEmbed function
describe("getEmbed Test", function() {
    var parameters = {
        id: 'x9DGAmJpbIKCXo8W',
        return_fields: 'id,user_id,document_id,type'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getEmbed(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the postEmbed function
describe("postEmbed Test", function() {
    var parameters = {
        document_id: '55865141',
        type: 2,
        width: 500,
        background_shape: 'square',
        color: 'grey',
        destination: 'magazinePage'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.postEmbed(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});

// Test for the putEmbed function
describe("putEmbed Test", function() {
    var parameters = {
        id: 'viNn5QAeXWDYryt4',
        document_id: '55865141',
        type: 2,
        width: 300,
        background_shape: 'square',
        color: 'grey',
        destination: 'magazinePage'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.putEmbed(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});
