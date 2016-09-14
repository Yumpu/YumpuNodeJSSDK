// include yumpu sdk
var yumpu = require('./yumpu');
var y = new yumpu();

y.setToken('yourToken');

// define the input (only small characters, no symbols, no blank spaces)
var testInput = 'inputfortestxy';
var testInputPut = testInput + 'put';

// Test for the getCountries function
y.getCountries(function(statusCode, documents) {
    check(statusCode, 'getCountries');
});

// Test for the getDocumentLanguages function
y.getDocumentLanguages(function(statusCode, documents) {
    check(statusCode, 'getDocumentLanguages');
});

// Test for the getDocumentCategories function
y.getDocumentCategories(function(statusCode, documents) {
    check(statusCode, 'getDocumentCategories');
});

// Test for the getUser function
var parameters = '';
y.getUser(parameters, function(statusCode, document) {
    check(statusCode, 'getUser');
});

// Test for the putUser function
var parameters = {
    language: 'en'
};
y.putUser(parameters, function(statusCode, document) {
    check(statusCode, 'putUser');
});

var successCount = 0;
var errorCount = 0;
var documentProgressIdUrl;
var documentProgressIdFile;
var documentIdUrl;
var documentIdFile;
var documentHotspotId;
var collectionId;
var sectionId;
var embedId;
var accessTagId;
var subscriptionId;

// Test for the postDocumentUrl function
var parameters = {
    title: testInput,
    url: 'http://www.onlinemarketing-praxis.de/uploads/pdf/suchparameter-google-uebersicht.pdf',
    page_teaser_image: './example/media/yumpu.png',
    page_teaser_page_range: '1-1',
    page_teaser_url: 'http://www.yumpu.com/en'
};
y.postDocumentUrl(parameters, function(statusCode, document) {
    if (check(statusCode, 'postDocumentUrl')) {
        documentProgressIdUrl = document.progress_id;

        // Test for the getDocumentProgress function
        documentProgressUrl();
    }
});

// Test for the postDocumentFile function
var parameters = {
    title: 'TestSearchDocument',
    file: './example/media/yumpu.pdf',
};
y.postDocumentFile(parameters, function(statusCode, document) {
    if (check(statusCode, 'postDocumentFile')) {
        documentProgressIdFile = document.progress_id;

        // Test for the getDocumentProgress function
        documentProgressFile();
    }
});

// Test for the postMember function
var parameters = {
    username: testInput,
    password: '9609ff2e7ba4d577161ab075e406b97f'
};
y.postMember(parameters, function(statusCode, document) {
    if (check(statusCode, 'postMember')) {
        memberId = document.member.id;
        whenMemeberBuilt();
    }
});

// Test for the postAccessTag function
var parameters = {
    name: testInput,
    description: testInput
};
y.postAccessTag(parameters, function(statusCode, document) {
    if (check(statusCode, 'postAccessTag')) {
        accessTagId = document.access_tag.id;
        whenAccessTagBuilt();
    }
});

// Test for the postSubscription function
var parameters = {
    itc_product_id: testInput,
    name: testInput,
    duration: 365
};
y.postSubscription(parameters, function(statusCode, document) {
    if (check(statusCode, 'postSubscription')) {
        subscriptionId = document.subscription.id;
        whenSubscriptionBuilt();
    }
});

function documentProgressUrl() {
    var cnt = 0;
    var parameters = {
        id: documentProgressIdUrl
    };
    y.getDocumentProgress(parameters, function(statusCode, document) {
        if (statusCode == 200) {
            check(statusCode, 'getDocumentProgressUrl');
            documentIdUrl = document.document[0].id;
            whenDocumentBuilt();
        } else {
            cnt = cnt + 1;
            if (cnt >= 10) {
                check(400, 'getDocumentProgressUrl');
            }
            wait(2000);
            documentProgressUrl();
        }
    });
}

function documentProgressFile() {
    var cnt = 0;
    var parameters = {
        id: documentProgressIdFile
    };
    y.getDocumentProgress(parameters, function(statusCode, document) {
        if (statusCode == 200) {
            check(statusCode, 'getDocumentProgressFile');
            documentIdFile = document.document[0].id;
            search();
        } else {
            cnt = cnt + 1;
            if (cnt >= 10) {
                check(400, 'getDocumentProgressFile');
            }
            wait(2000);
            documentProgressFile();
        }
    });
}

function whenDocumentBuilt() {
    // Test for the getDocument function
    var parameters = {
        id: documentIdUrl,
        return_fields: 'id,create_date,update_date,url,image_small'
    };
    y.getDocument(parameters, function(statusCode, document) {
        check(statusCode, 'getDocument');
    });

    // Test for the getDocuments function
    var parameters = '';
    y.getDocuments(parameters, function(statusCode, documents) {
        check(statusCode, 'getDocuments');
    });

    // Test for the putDocument function
    var parameters = {
        id: documentIdUrl,
        title: testInputPut
    };
    y.putDocument(parameters, function(statusCode, document) {
        check(statusCode, 'putDocument')
    });

    // Test for the postDocumentHotspot function
    var parameters = {
        document_id: documentIdUrl,
        page: 2,
        type: 'link',
        settings: {
            x: 10,
            y: 10,
            w: 10,
            h: 10,
            name: testInput,
            tooltip: testInput,
            link: 'https://www.yumpu.com'
        }
    };
    y.postDocumentHotspot(parameters, function(statusCode, document) {
        if (check(statusCode, 'postDocumentHotspot')) {
            documentHotspotId = document.hotspot[0].id;
            whenDocumentHotspotBuilt();
        }
    });

    // Test for the postCollection function
    var parameters = {
        name: testInput
    };
    y.postCollection(parameters, function(statusCode, document) {
        if (check(statusCode, 'postCollection')) {
            collectionId = document.collection[0].id;
            whenCollectionBuilt();
        };
    });

    // Test for the postEmbed function
    var parameters = {
        document_id: documentIdUrl,
        type: 2
    }
    y.postEmbed(parameters, function(statusCode, document) {
        if (check(statusCode, 'postEmbed')) {
            embedId = document.embed.id;
            whenEmbedBuilt();
        };
    });
}

function whenDocumentHotspotBuilt() {

    // Test for the getDocumentHotspot function
    var parameters = {
        id: documentHotspotId,
        return_fields: 'id,document_id,page,type,settings,create_date,update_date'
    };
    y.getDocumentHotspot(parameters, function(statusCode, document) {
        check(statusCode, 'getDocumentHotspot');
    });

    // Test for the getDocumentHotspots function
    var parameters = {
        id: documentIdUrl,
        limit: 5,
        sort: 'create_date_desc',
        return_fields: 'id,page,type,settings'
    };
    y.getDocumentHotspots(parameters, function(statusCode, document) {
        check(statusCode, 'getDocumentHotspots');
    });

    // Test for the putDocumentHotspot function
    var parameters = {
        id: documentHotspotId,
        type: 'link',
        settings: {
            x: 20,
            y: 20,
            w: 10,
            h: 10,
            name: 'MyHotspot',
            tooltip: 'MyTooltipForHotspot',
            link: 'https://www.yumpu.com'
        }
    };
    y.putDocumentHotspot(parameters, function(statusCode, document) {
        check(statusCode, 'putDocumentHotspot');
    });
}

function whenCollectionBuilt() {
    // Test for the getCollections function
    var parameters = {};
    y.getCollections(parameters, function(statusCode, document) {
        check(statusCode, 'getCollections');
    });

    // Test for the getCollection function
    var parameters = {
        id: collectionId
    };
    y.getCollection(parameters, function(statusCode, document) {
        check(statusCode, 'getCollection');
    });

    // Test for the putCollection fucntion
    var parameters = {
        id: collectionId,
        name: testInputPut
    };
    y.putCollection(parameters, function(statusCode, document) {
        check(statusCode, 'putCollection');
    });

    // Test for the postSection function
    var parameters = {
        id: collectionId,
        name: testInput
    };
    y.postSection(parameters, function(statusCode, document) {
        check(statusCode, 'putCollection');
        sectionId = document.section[0].id;
        whenSectionBuilt();
    });
}

function whenSectionBuilt() {
    // Test for the getSection function
    var parameters = {
        id: collectionId + '_' + sectionId,
        return_fields: 'id,create_date,update_date,name,description,sorting,order,documents'
    };
    y.getSection(parameters, function(statusCode, document) {
        check(statusCode, 'getSection');
    });

    // Test for the putSection function
    var parameters = {
        id: collectionId + '_' + sectionId,
        name: testInputPut,
        description: testInputPut
    };
    y.putSection(parameters, function(statusCode, document) {
        check(statusCode, 'putSection');
    });

    // Test for the postSectionDocument function
    var parameters = {
        id: collectionId + '_' + sectionId,
        documents: documentIdUrl
    };
    y.postSectionDocument(parameters, function(statusCode, document) {
        check(statusCode, 'postSectionDocument');
    });
}

function whenEmbedBuilt() {
    // Test for the getEmbeds function
    var parameters = '';
    y.getEmbeds(parameters, function(statusCode, documents) {
        check(statusCode, 'getEmbeds');
    });

    // Test for the getEmbed function
    var parameters = {
        id: embedId,
        return_fields: 'id,user_id,document_id,type'
    };
    y.getEmbed(parameters, function(statusCode, document) {
        check(statusCode, 'getEmbed');
    });

    // Test for the putEmbed function
    var parameters = {
        id: embedId,
        document_id: documentIdUrl,
        type: 2,
        background_shape: 'square',
    };
    y.putEmbed(parameters, function(statusCode, document) {
        check(statusCode, 'putEmbed');
    });
}

function whenMemeberBuilt() {
    // Test for the getMembers function
    var parameters = {};
    y.getMembers(parameters, function(statusCode, document) {
        check(statusCode, 'getMembers');
    });

    // Test for the getMember function
    var parameters = {
        id: memberId
    };
    y.getMember(parameters, function(statusCode, document) {
        check(statusCode, 'getMember');
    });

    // Test for the putMember function
    var parameters = {
        id: memberId,
        username: testInputPut,
        password: '9609ff2e7ba4d577161ab075e406b97f'
    };
    y.putMember(parameters, function(statusCode, document) {
        check(statusCode, 'putMember');
    });
}

function whenAccessTagBuilt() {
    // Test for the getAccessTags function
    var parameters = {};
    y.getAccessTags(parameters, function(statusCode, document) {
        check(statusCode, 'getAccessTags');
    });

    // Test for the getAccessTag function
    var parameters = {
        id: accessTagId
    };
    y.getAccessTag(parameters, function(statusCode, document) {
        check(statusCode, 'getAccessTag');
    });

    // Test for the putAccessTag function
    var parameters = {
        id: accessTagId,
        name: testInputPut
    };
    y.putAccessTag(parameters, function(statusCode, document) {
        check(statusCode, 'putAccessTag');
    });
}

function whenSubscriptionBuilt() {
    // Test for the getSubscriptions function
    var parameters = {
        limit: 10,
        offset: 0
    };
    y.getSubscriptions(parameters, function(statusCode, document) {
        check(statusCode, 'getSubscriptions');
    });

    // Test for the getSubscription function
    var parameters = {
        id: subscriptionId,
    };
    y.getSubscription(parameters, function(statusCode, document) {
        check(statusCode, 'getSubscription');
    });

    // Test fot the putSubscription function
    var parameters = {
        id: subscriptionId,
        itc_product_id: testInputPut,
        name: testInputPut,
        duration: 7
    };
    y.putSubscription(parameters, function(statusCode, document) {
        check(statusCode, 'putSubscription');
    });
}

var cntSearch = 0;

function search() {
    var parameters = {
        q: 'TestSearchDocument',
        in: 'title'
    };
    y.search(parameters, function(statusCode, document) {
        if (statusCode == 404) {
            cntSearch = cntSearch + 1;
            if (cntSearch > 30) {
                check(400, 'search');
            }
            wait(2000);
            search();
        } else {
            check(statusCode, 'search');
        }
    });
}

function doDelete() {
    // Test for the deleteSubscription function
    var parameters = {
        id: subscriptionId
    };
    y.deleteSubscription(parameters, function(statusCode, document) {
        check(statusCode, 'deleteSubscription');
    });

    // Test for the deleteAccessTag function
    var parameters = {
        id: accessTagId
    };
    y.deleteAccessTag(parameters, function(statusCode, document) {
        check(statusCode, 'deleteAccessTag');
    });

    // Test for the deleteMember function
    var parameters = {
        id: memberId
    };
    y.deleteMember(parameters, function(statusCode, document) {
        check(statusCode, 'deleteMember');
    });

    // Test for the deleteEmbed function
    var parameters = {
        id: embedId
    };
    y.deleteEmbed(parameters, function(statusCode, document) {
        check(statusCode, 'deleteEmbed');
    });

    // Test for the deleteSectionDocument function
    var parameters = {
        id: collectionId + '_' + sectionId,
        documents: documentIdUrl
    };
    y.deleteSectionDocument(parameters, function(statusCode, document) {
        if (check(statusCode, 'deleteSectionDocument')) {
            whenSectionDocumentDeleted();
        }
    });
}

function whenSectionDocumentDeleted() {
    // Test for the deleteSection function
    var parameters = {
        id: collectionId + '_' + sectionId
    };
    y.deleteSection(parameters, function(statusCode, document) {
        if (check(statusCode, 'deleteSection')) {
            whenSectionDeleted();
        }
    });

    // Test for the deleteDocumentHotspot function
    var parameters = {
        id: documentHotspotId,
    };
    y.deleteDocumentHotspot(parameters, function(statusCode, document) {
        if (check(statusCode, 'deleteDocumentHotspot')) {
            whenDocumentHotspotDeleted();
        }
    });
}

function whenSectionDeleted() {
    // Test for the deleteCollection function
    var parameters = {
        id: collectionId
    };
    y.deleteCollection(parameters, function(statusCode, document) {
        check(statusCode, 'deleteCollection');
    });
}

function whenDocumentHotspotDeleted() {
    // Test for the deleteDocument function
    var parameters = {
        id: documentIdUrl,
    };
    y.deleteDocument(parameters, function(statusCode, document) {});
    var parameters = {
        id: documentIdFile,
    };
    y.deleteDocument(parameters, function(statusCode, document) {
        check(statusCode, 'deleteDocument');
    });
}

function check(statusCode, text) {
    status = 200;
    if (text == 'postDocumentUrl' || text == 'postDocumentFile') {
        status = 202;
    }
    if (statusCode == status) {
        successCount = successCount + 1;
        console.log('success - ' + text + ' -------- ' + successCount + ' successful tests');
        if (successCount == 41) {
            doDelete();
        }
        return true;
    } else {
        errorCount = errorCount + 1;
        console.log('fail - ' + text + ' -------- ' + errorCount + ' error tests' + ' ------- ' + statusCode);
        return false;
    }
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
