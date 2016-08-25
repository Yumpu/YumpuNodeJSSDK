var config = require("./config");
var yumpuFunctions = require('./yumpuFunctions')
var c = new config();
var yf = new yumpuFunctions();

var yumpu = function() {
    yf.log('Yumpu class initialized');
}

/**
 * @api {get} /documents.json getDocuments()
 * @apiVersion 1.0.0
 * @apiName Documents get
 * @apiGroup Documents
 *
 * @apiHeaderExample {js} Function-Example:
 *  var parameters = '{
 *     offset: 0,
 *     limit: 1
 *  }';
 *  yumpu.getDocuments(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {Integer} [offset] Retrieve rows at position X (min. 0).
      <br/><br/><b>Default:</b> 0
 * @apiParam {Integer} [limit] Retrieve X rows (min. 0 and max. 100).
      <br/><br/><b>Default:</b> 10
 * @apiParam {String} [sort] Sort results ascending or descendening (asc or desc).
      <br/><br/><b>Default:</b> desc
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, create_date, update_date, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code, settings).
      <br/><br/><b>Default:</b> id, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "total": 16,
 *         "documents": [
 *           {
 *             "id": "20327012",
 *             "image": {
 *               "small": "http://images001.yumpu.com/yumpu.com/000/020/459/915/1379668840_5873/thumb/WINDROSE_AdriaWindjammer_000001.jpg"
 *             },
 *             "embed_code": "iframe"
 *           }
 *         ],
 *         "state": "success"
 *       }
 *
 * @apiError 404_not_found No documents found.
 * @apiError 403_forbidden Invalid API Key.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *      { state: 'failed',
 *        errors: [ { message: 'No documents found' } ],
 *        completed_in: '0.2725'
 *      }
 */
yumpu.prototype.getDocuments = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().documentsGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getDocuments - ' + reqData.host + reqData.path);
}

/**
 * @api {get} /document.json getDocument()
 * @apiVersion 1.0.0
 * @apiName Document get
 * @apiGroup Document
 *
 * @apiHeaderExample {js} Function-Example:
 *  var parameters = {
 *     id: 20327033
 *  };
 *  yumpu.getDocument(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {Integer} id One of your document ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, create_date, update_date, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code, settings).
      <br/><br/><b>Default:</b> id, url, short_url, image_small, image_medium, image_big, language, title, description, tags, embed_code
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *         "document": [
 *           {
 *             "id": "20327033",
 *             "image": {
 *               "big": "http://images001.yumpu.com/yumpu.com/000/020/459/910/1379668843_8906/zoom/TOUROPA_AllgaeuKleinwalse000001.jpg"
 *             }
 *           }
 *         ],
 *         "state": "success"
 *       }
 */
yumpu.prototype.getDocument = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().documentGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getDocument - ' + reqData.host + reqData.path);
}

/**
 * @api {post} /document.json postDocumentFile()
 * @apiVersion 1.0.0
 * @apiName Document post
 * @apiGroup Document
 *
 * @apiHeaderExample {js} Function-Example:
 *  var parameters = {
 *     title: 'My document title',
 *     file: './example/media/yumpu.pdf'
 *  };
 *  yumpu.postDocumentFile(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {Integer} file File data
 * @apiParam {String} title A title for your document. Min. length 5 characters, max. length 255 characters
 * @apiParam {String} [description] A description for your document. Min. length 5 characters, max. length 2500 characters
 * @apiParam {String} [category] 1, 2 or … (A list of valid category ids: Document categories)
    <br/><br/><b>Default:</b> 0 = None
 * @apiParam {String} [language] en, de or … (A list of valid languages: Document languages)
    <br/><br/><b>Default:</b> en
 * @apiParam {String} [tags] A list of words seperated by comma (house,garden,balcony). Min. length 3 characters, max. length 30 characters. Allowed characters a-z and a space.
    <br/><br/><b>Default:</b> Autogenerated by tag service
 * @apiParam {String} [visibility] public, private, rprotected, pprotected, dprotected, webkiosk, appkiosk or webappkiosk (rprotected = protected by referrer, pprotected = protected by password, dprotected = protected by domain(s))
    <br/><br/><b>Default:</b> public
 * @apiParam {String} [domains] A list of domains seperated by a comma (Note: Visibility must be set to dprotected)
    <br/><br/><b>Examples:</b>
    <br/>yumpu.com,blog.yumpu.com,developers.yumpu.com
    <br/>yumpu.com
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *          "file": {
 *            "client_name": "yumpu.pdf",
 *            "server_name": "812373127ee7a372a5130f9096545b5e524940f77e4d06.24583099.pdf",
 *            "size": "23.1 MB",
 *            "mime_type": "application/pdf",
 *            "sha1_checksum": "d5666133b4a909a6506aeb09d57956a12a97e0e4"
 *          },
 *          "document": {
 *            "title": "My document title"
 *          },
 *          "progress_id": "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
 *          "state": "success"
 *        }
 *
 */
yumpu.prototype.postDocumentFile = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().documentPostFile,
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postDocumetUrl - ' + reqData.host + reqData.path);
}

// delete a document
// more details on: http://developers.yumpu.com/api/document/post-url/
yumpu.prototype.deleteDocument = function(parameters, callback) {
    var reqData = {
        method: 'DELETE',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().documentDelete),
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('deleteDocument - ' + reqData.host + reqData.path);
}

/**
 * @api {get} /document/hotspots.json getDocumentHotspots()
 * @apiVersion 1.0.0
 * @apiName Document hotspots get
 * @apiGroup Document hotspots
 *
 *
 * @apiHeaderExample {js} Function-Example:
 *  var parameters = '{
 *    id: 27109037,
 *    offset: 0,
 *    limit: 1
 *  }';
 *  yumpu.getDocuments(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {Integer} id One of your document hotspot ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, document_id, page, type, settings, create_date, update_date).
      <br/><br/><b>Default:</b> id, document_id, page, type, settings, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *          "hotspot": [
 *            {
 *              "id": "18414788HxIRKIoB",
 *              "document_id": "27109085",
 *              "page": "1",
 *              "type": "link",
 *              "settings": {
 *                "x": "0",
 *                "y": "0",
 *                "w": "400",
 *                "h": "100",
 *                "name": "hotspot_put",
 *                "tooltip": "hotspot_put",
 *                "link": "http:\/\/www.google.com"
 *              },
 *              "create_date": "2014-09-23 07:17:39",
 *              "update_date": "2014-09-23 07:20:21"
 *            }
 *          ],
 *          "state": "success",
 *          "completed_in": "0.1853"
 *        }
 *
 */
yumpu.prototype.getDocumentHotspots = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().hotspotsGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getDocumentHotspots - ' + reqData.host + reqData.path);
}

/**
 * @api {get} /document/hotspot.json getDocumentHotspot()
 * @apiVersion 1.0.0
 * @apiName Document hotspot get
 * @apiGroup Document hotspot
 *
 *
 * @apiHeaderExample {js} Function-Example:
 *  var parameters = {
       id: '18414788HxIRKIoB'
 *  };
 *  yumpu.getDocumentHotspot(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiParam {Integer} id One of your document hotspot ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (id, document_id, page, type, settings, create_date, update_date).
      <br/><br/><b>Default:</b> id, document_id, page, type, settings, create_date, update_date
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *          "hotspot": [
 *            {
 *              "id": "18414788HxIRKIoB",
 *              "document_id": "27109085",
 *              "page": "1",
 *              "type": "link",
 *              "settings": {
 *                "x": "0",
 *                "y": "0",
 *                "w": "400",
 *                "h": "100",
 *                "name": "hotspot_put",
 *                "tooltip": "hotspot_put",
 *                "link": "http:\/\/www.google.com"
 *              },
 *              "create_date": "2014-09-23 07:17:39",
 *              "update_date": "2014-09-23 07:20:21"
 *            }
 *          ],
 *          "state": "success",
 *          "completed_in": "0.1853"
 *        }
 *
 */
yumpu.prototype.getDocumentHotspot = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().hotspotGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().hotspotDelete),
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putCollection - ' + reqData.host + reqData.path);
}

// retrived all datas for the collection with $data['id']; reutrn field can be specified in $data['return_fields']
// more details on: http://developers.yumpu.com/api/section/get-5/
yumpu.prototype.getSection = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().sectionGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getSection - ' + reqData.host + reqData.path);
}

// create a new Section
// more details on : http://developers.yumpu.com/api/section/post-2/
yumpu.prototype.postSection = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().sectionPost,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postSection - ' + reqData.host + reqData.path);
}

// update a section
// more details on : http://developers.yumpu.com/api/section/put-3/
yumpu.prototype.putSection = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().sectionPut,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putSection - ' + reqData.host + reqData.path);
}

// create a new section document
// An example of an create section document array is $data = array('id' => 'mySectionId', 'documents'=> '1,2,3' );
// more details on :http://developers.yumpu.com/api/section-document/post-3/
yumpu.prototype.postSectionDocument = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().sectionDocumentPost,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postSectionDocument - ' + reqData.host + reqData.path);
}

// Delete a document in section.
// more details on : http://developers.yumpu.com/api/section-document/delete-4/
yumpu.prototype.deleteSectionDocument = function(parameters, callback) {
    var reqData = {
        method: 'DELETE',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().sectionDocumentDelete,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('deleteSectionDocument - ' + reqData.host + reqData.path);
}

// Search documents taking into consideration different criterias; q param is required;
// more details on: http://developers.yumpu.com/api/search/get/
yumpu.prototype.search = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointSearchDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().searchGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
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
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getEmbeds - ' + reqData.host + reqData.path);
}

// retrieve all users' embeds datas
// more details on: http://developers.yumpu.com/api/embeds/get/
yumpu.prototype.getEmbed = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().embedGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getEmbed - ' + reqData.host + reqData.path);
}

// post embed
// more details on: http://developers.yumpu.com/api/embed/post/
yumpu.prototype.postEmbed = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().embedPost,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postEmbed - ' + reqData.host + reqData.path);
}

// put embed
// more details on: http:/developers.yumpu.com/api/user/put
yumpu.prototype.putEmbed = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().embedPut,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putEmbed - ' + reqData.host + reqData.path);
}

// retrieve all users' members datas
// more details on: http://developers.yumpu.com/api/members/get/
yumpu.prototype.getMembers = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().membersGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getMembers - ' + reqData.host + reqData.path);
}

// get member details
// more details on: http://developers.yumpu.com/api/member/get/
yumpu.prototype.getMember = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().memberGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getMember - ' + reqData.host + reqData.path);
}

// post member
// more details on: http://developers.yumpu.com/api/member/post/
yumpu.prototype.postMember = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().memberPost,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postMember - ' + reqData.host + reqData.path);
}

// put member
// more details on: http://developers.yumpu.com/api/member/post/
yumpu.prototype.putMember = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().memberPut,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putMember - ' + reqData.host + reqData.path);
}

// retrieve all users' accessTags datas
// more details on: http://developers.yumpu.com/api/access-tags/get/
yumpu.prototype.getAccessTags = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().accessTagsGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getAccessTags - ' + reqData.host + reqData.path);
}

// retrived all datas for the Access-Tag with id $id
// more details on: http://developers.yumpu.com/api/access-tags/get/
yumpu.prototype.getAccessTag = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().accessTagGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getAccessTag - ' + reqData.host + reqData.path);
}

// create a new access-tag
// An example of an update array is $data = array('name' => 'my-accesstag');
// more details on : http://developers.yumpu.com/api/access-tag/post/
yumpu.prototype.postAccessTag = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().accessTagPost,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postAccessTag - ' + reqData.host + reqData.path);
}

// update a access-tag
// An example of an update array is $data = array('id' => 'collectionId', 'name' => 'mynewAccesTagName');
// more details on : http://developers.yumpu.com/api/access-tag/put/
yumpu.prototype.putAccessTag = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().accessTagPut,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putAccessTag - ' + reqData.host + reqData.path);
}

// retrieve all users' subscriptions datas
// more details on: http://developers.yumpu.com/api/subscriptions/get/
yumpu.prototype.getSubscriptions = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().subscriptionsGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getSubscriptions - ' + reqData.host + reqData.path);
}

// get subscription details
// more details on: http://developers.yumpu.com/api/subscription/get/
yumpu.prototype.getSubscription = function(parameters, callback) {
    var reqData = {
        method: 'GET',
        host: c.getYumpuConfig().endpointDomain,
        path: yf.buildUrl(parameters, c.getYumpuEndpoints().subscriptionGet),
        headers: yf.setHeaders(c.getYumpuConfig().token),
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('getSubscription - ' + reqData.host + reqData.path);
}

// post subscription
// more details on: http://developers.yumpu.com/api/subscription/post/
yumpu.prototype.postSubscription = function(parameters, callback) {
    var reqData = {
        method: 'POST',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().subscriptionPost,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('postSubscription - ' + reqData.host + reqData.path);
}

// put subscription
// more details on: http://developers.yumpu.com/api/subscription/put/
yumpu.prototype.putSubscription = function(parameters, callback) {
    var reqData = {
        method: 'PUT',
        host: c.getYumpuConfig().endpointDomain,
        path: c.getYumpuEndpoints().subscriptionPut,
        headers: yf.setHeaders(c.getYumpuConfig().token),
        body: parameters
    };
    yf.executeRequest(reqData, function(statusCode, data) {
        callback(statusCode, data);
    });
    yf.log('putSubscription - ' + reqData.host + reqData.path);
}

module.exports = yumpu;
