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
// more details on: http://developers.yumpu.com/api/document-hotspots/get/
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

// get one hotspot
// more details on: http://developers.yumpu.com/api/document-hotspot/get/
yumpu.prototype.getDocumentHotspot = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().hotspotGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getDocumentHotspot - ' + reqData.host + reqData.path);
}

// create a new hotspot
// more details on: http://developers.yumpu.com/api/document/post-url/
yumpu.prototype.postDocumentHotspot = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().hotspotPost,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postDocumentHotspot - ' + reqData.host + reqData.path);
}

// update a hotspot
// more details on: http://developers.yumpu.com/api/document/post-url/
yumpu.prototype.putDocumentHotspot = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().hotspotPut,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putDocumentHotspot - ' + reqData.host + reqData.path);
}

// delete a hotspot
// more details on: http://developers.yumpu.com/api/document/post-url/
yumpu.prototype.deleteDocumentHotspot = function(parameters, callback) {
    var reqData = {
        method: 'DELETE',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().hotspotDelete,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('deleteDocumentHotspot - ' + reqData.host + reqData.path);
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

// retrived all datas for the collection with id $id
// more details on: http://developers.yumpu.com/api/collection/get-4/
yumpu.prototype.getCollection = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().collectionGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getCollection - ' + reqData.host + reqData.path);
}

// create a new collection
// more details on : http://developers.yumpu.com/api/collection/post/
yumpu.prototype.postCollection = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().collectionPost,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postCollection - ' + reqData.host + reqData.path);
}

// update a collection
// more details on : http://developers.yumpu.com/api/collection/put-2/
yumpu.prototype.putCollection = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().collectionPut,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putCollection - ' + reqData.host + reqData.path);
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

// Retrieve $token's user profile data
// more details on: http://developers.yumpu.com/api/user/get/
yumpu.prototype.getUser = function(parameters, callback) {
    var token = c.getYumpuConfig().token;
    if (parameters) {
        token = parameters.token;
    }
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().userGet,
        headers: {
            'X-ACCESS-TOKEN': token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getUser - ' + reqData.host + reqData.path);
}

// Create a new user profile
// more details on: http://developers.yumpu.com/api/user/post/
yumpu.prototype.postUser = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().userPost,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postUser - ' + reqData.host + reqData.path);
}

// update an existing user informations
// more details on: http:/developers.yumpu.com/api/user/put
yumpu.prototype.putUser = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().userPut,
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putUser - ' + reqData.host + reqData.path);
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

// retrieve all users' accessTags datas
// more details on: http://developers.yumpu.com/api/access-tags/get/
yumpu.prototype.getAccessTags = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().accessTagsGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getAccessTags - ' + reqData.host + reqData.path);
}

// retrieve all users' subscriptions datas
// more details on: http://developers.yumpu.com/api/subscriptions/get/
yumpu.prototype.getSubscriptions = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().subscriptionsGet),
        headers: {
            'X-ACCESS-TOKEN': c.getYumpuConfig().token,
            'Content-Type': 'application/json'
        },
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getSubscriptions - ' + reqData.host + reqData.path);
}

module.exports = yumpu;
