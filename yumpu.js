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
    var reqData = {
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().documentsGet),
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
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().documentGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
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
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().documentPostFile,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'multipart/form-data'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackPostDocumentFile(statusCode, data);
    });
    yf.log('postDocumetFile - ' + reqData.host + reqData.path);
}

// create a new document from a url
// more details on: http://developers.yumpu.com/api/document/post-url/
yumpu.prototype.postDocumentUrl = function(parameters, callbackPostDocumentUrl) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().documentPostUrl,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackPostDocumentUrl(statusCode, data);
    });
    yf.log('postDocumetFile - ' + reqData.host + reqData.path);
}

// get document hotspots
// more details on: http://developers.yumpu.com/api/document/get/
yumpu.prototype.getDocumentHotspots = function(parameters, callbackGetDocument) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().hotspotsGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackGetDocument(statusCode, data);
    });
    yf.log('getDocument - ' + reqData.host + reqData.path);
}

// Get current document progress.
// Note: The id you will get when using a create document method (document post file or document post url).
// more details on: http://developers.yumpu.com/api/document-progress/get/
yumpu.prototype.getDocumentProgress = function(parameters, callbackGetDocument) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().documentProgress),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackGetDocument(statusCode, data);
    });
    yf.log('getDocument - ' + reqData.host + reqData.path);
}

// retrieve all documents' possible categories
// more details on: http://developers.yumpu.com/api/document-categories/get/
yumpu.prototype.getDocumentCategories = function(callbackGetDocument) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().categoriesGet,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callbackGetDocument(statusCode, data);
    });
    yf.log('getDocument - ' + reqData.host + reqData.path);
}

module.exports = yumpu;
