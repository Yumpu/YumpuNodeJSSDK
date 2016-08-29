// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getCountries function
describe("getCountries Test", function() {
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getCountries(function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

// Test for the getDocumentLanguages function
describe("getDocumentLanguages Test", function() {
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocumentLanguages(function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

// Test for the getDocumentCategories function
describe("getDocumentCategories Test", function() {
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getDocumentCategories(function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

var documentProgressId;
var statusDocumentProgress;
var documentId;
// Test for the postDocumentUrl function
describe("postDocumentUrl Test", function() {
    // Variables:

    var status;

    beforeEach(function(done) {
        var parameters = {
            'title': 'TestDocuemnt',
            'url': 'http://www.onlinemarketing-praxis.de/uploads/pdf/suchparameter-google-uebersicht.pdf'
        };
        var y = new yumpu();
        y.postDocumentUrl(parameters, function(statusCode, document) {
            status = statusCode;
            documentProgressId = document.progress_id;
            done();
        });
    });
    it("return status schould be 202", function(done) {
        expect(status).toBe(202);
        done();
    });
});

// Test for the getDocumentProgress function

describe("getDocumentProgress Test", function() {
    beforeEach(function(done) {
        var parameters = {
            id: documentProgressId
        };
        var y = new yumpu();
        wait(10000);
        y.getDocumentProgress(parameters, function(statusCode, document) {
            // console.log('Status: ' + statusCode)
            // console.log(document);
            document.forEach(function(i) {
                statusDocumentProgress = statusCode;
                documentId = i.id;
                console.log(documentId);
            });
            if (statusCode == 202) {
                console.log('rendering_in_progress');
            }
            done();

        });
    });

    it(" ... return status schould be 200", function(done) {
        expect(statusDocumentProgress).toEqual(200);
        done();
    });

    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }
});

// Test for the getDocument function
describe("getDocument Test", function() {
    var status;

    beforeEach(function(done) {
        console.log(documentId);
        var parameters = {
            id: documentId,
            return_fields: 'id,create_date,update_date,url,image_small'
        };
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

// Test for the putDocument function
describe("putDocument Test", function() {
    var status;

    beforeEach(function(done) {
        var parameters = {
            id: documentId,
            title: 'TestDocumentPut'
        };
        var y = new yumpu();
        y.putDocument(parameters, function(statusCode, document) {
            status = statusCode;
            done();
        });
    });
    it("return status schould be 200", function(done) {
        expect(status).toBe(200);
        done();
    });
});
