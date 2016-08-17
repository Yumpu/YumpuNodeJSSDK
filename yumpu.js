var config = require("./config");
var yumpuFunctions = require('./yumpuFunctions')
var c = new config();
var yf = new yumpuFunctions();

var yumpu = function() {
    yf.log('Yumpu class initialized');
}

// get list of documents
// more details on: http://developers.yumpu.com/api/documents/get/
yumpu.prototype.getDocuments = function(parameters, callbackGetDocuments) {
    if (!parameters) {
        var path = c.getYumpuEndpoints().documentsGet;
    } else {
        var path = c.getYumpuEndpoints().documentsGet + '?offset=' + parameters.offset + '&limit=' + parameters.limit + '&sort=desc';
    };
    var reqData = {
        host: c.getYumpuConfig().endpointDomain,
        path: path,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        method: 'GET',
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackGetDocuments(statusCode, data);
    });
    yf.log('getDocuments - ' + reqData.host + reqData.path);
}

// get document details
// more details on: http://developers.yumpu.com/api/document/get/
yumpu.prototype.getDocument = function(parameters, callbackGetDocument) {
    var reqData = {
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().documentGet + '?id=' + parameters.id + '&return_fields=' + parameters.return_fields,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        method: 'GET',
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackGetDocument(statusCode, data);
    });
    yf.log('getDocument - ' + reqData.host + reqData.path);
}

// create a new document from a file
// more details on: http://developers.yumpu.com/api/document/post-file/
yumpu.prototype.postDocumentFile = function(parameters, callbackPostDocumentFile) {
    var reqData = {
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().documentPostFile,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        body: {
            title: parameters.title,
            file: parameters.file
        }
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackPostDocumentFile(statusCode, data);
    });
    yf.log('postDocumetFile - ' + reqData.host + reqData.path);
}

module.exports = yumpu;
