// include yumpu sdk
var yumpu = require('../yumpu');

// Test for the getUser function
describe("getUser Test", function() {
    var parameters = '';
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.getUser(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});

// Test for the postUser function
// describe("postUser Test", function() {
//   var parameters = {
//       email: 'youruser@yumpu.com',
//       username: 'newuser123456',
//       password: 'lukibals'
//   };
//     var status;
//
//     beforeEach(function(done) {
//         var y = new yumpu();
//         y.postUser(parameters, function(statusCode, documents) {
//             status = statusCode;
//             done();
//         });
//     });
//     it(" ... return status schould be 200", function(done) {
//         expect(status).toEqual(200);
//         done();
//     });
// });

// Test for the putUser function
describe("putUser Test", function() {
    var parameters = {
        gender: 'male',
        firstname: 'Lukas',
        lastname: 'Bals',
        website: 'http://www.lukasbals.at'
    };
    var status;

    beforeEach(function(done) {
        var y = new yumpu();
        y.putUser(parameters, function(statusCode, documents) {
            status = statusCode;
            done();
        });
    });
    it(" ... return status schould be 200", function(done) {
        expect(status).toEqual(200);
        done();
    });
});
