var config = require("./config");
var yumpuFunctions = require('./yumpuFunctions')
var c = new config();
var yf = new yumpuFunctions();

var yumpu = function() {
    yf.log('Yumpu class initialized');
}

// get list of documents
// more details on: http://developers.yumpu.com/api/documents/get/
yumpu.prototype.getDocuments = function(parameters, callback) {
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
        callback(statusCode, data);
    });
    yf.log('getDocuments - ' + reqData.host + reqData.path);
}

// get document details
// more details on: http://developers.yumpu.com/api/document/get/
yumpu.prototype.getDocument = function(parameters, callback) {
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
        callback(statusCode, data);
    });
    yf.log('getDocument - ' + reqData.host + reqData.path);
}

// create a new document from a file
// more details on: http://developers.yumpu.com/api/document/post-file/
yumpu.prototype.postDocumentFile = function(parameters, callback) {
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
        callback(statusCode, data);
    });
    yf.log('postDocumetFile - ' + reqData.host + reqData.path);
}

// create a new document from a url
// more details on: http://developers.yumpu.com/api/document/post-url/
yumpu.prototype.postDocumentUrl = function(parameters, callback) {
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
        callback(statusCode, data);
    });
    yf.log('postDocumetUrl - ' + reqData.host + reqData.path);
}

// get document hotspots
// more details on: http://developers.yumpu.com/api/document/get/
yumpu.prototype.getDocumentHotspots = function(parameters, callback) {
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
        callback(statusCode, data);
    });
    yf.log('getDocumentHotspots - ' + reqData.host + reqData.path);
}

// Get current document progress.
// Note: The id you will get when using a create document method (document post file or document post url).
// more details on: http://developers.yumpu.com/api/document-progress/get/
yumpu.prototype.getDocumentProgress = function(parameters, callback) {
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
        callback(statusCode, data);
    });
    yf.log('getDocumentProgress - ' + reqData.host + reqData.path);
}

// retrieve all documents' possible categories
// more details on: http://developers.yumpu.com/api/document-categories/get/
yumpu.prototype.getDocumentCategories = function(callback) {
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
        callback(statusCode, data);
    });
    yf.log('getDocumentCategories - ' + reqData.host + reqData.path);
}

// retrieve all documents' possible languages
// more details on: http://developers.yumpu.com/api/document-languages/get/
yumpu.prototype.getDocumentLanguages = function(callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().languagesGet,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getDocumentLanguages - ' + reqData.host + reqData.path);
}

// retrieve all  possible countries
// more details on: http://developers.yumpu.com/api/countries/get/
yumpu.prototype.getCountries = function(callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().countriesGet,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getCountries - ' + reqData.host + reqData.path);
}

// retrieve all users' collections datas
// more details on: http://developers.yumpu.com/api/collections/get-3/
yumpu.prototype.getCollections = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().collectionsGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getCollections - ' + reqData.host + reqData.path);
}

// Search documents taking into consideration different criterias; q param is required;
// more details on: http://developers.yumpu.com/api/search/get/
yumpu.prototype.search = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointSearchDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().searchGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('search - ' + reqData.host + reqData.path);
}

// retrieve all users' embeds datas
// more details on: http://developers.yumpu.com/api/embeds/get/
yumpu.prototype.getEmbeds = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().embedsGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getEmbeds - ' + reqData.host + reqData.path);
}

// retrieve all users' members datas
// more details on: http://developers.yumpu.com/api/members/get/
yumpu.prototype.getMembers = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().membersGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getMembers - ' + reqData.host + reqData.path);
}
module.exports = yumpu;
