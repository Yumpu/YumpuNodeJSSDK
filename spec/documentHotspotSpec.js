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

// Test for the postDocumentHotspot function
describe("postDocumentHotspot Test", function() {
    var parameters = {
        document_id: 55858527,
        page: 2,
        type: 'link',
        settings: {
            x: 10,
            y: 10,
            w: 10,
            h: 10,
            name: 'MyHotspot',
            tooltip: 'MyTooltipForHotspot',
            link: 'http://www.facebook.com'
        }
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.postDocumentHotspot(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

// Test for the putDocumentHotspot function
describe("putDocumentHotspot Test", function() {
  var parameters = {
      id: '7c7cd96f6YgDzdH3',
      type: 'link',
      settings: {
          x: 20,
          y: 20,
          w: 10,
          h: 10,
          name: 'MyHotspot',
          tooltip: 'MyTooltipForHotspot',
          link: 'http://www.apple.com'
      }
  };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.putDocumentHotspot(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
