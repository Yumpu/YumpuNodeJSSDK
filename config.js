// config array
//
// token - user token provided by yumpu;
// returnFormat - the response data format: array or json; default is array;
// endpointDomain - the yumpu domain for the api methods;
// endpointSearchDomain - the yumpu domain for the search api method;
// debug - wether to write requests logs ot not; default is FALSE;
// useCurl - wether to use CURL method or non CURL methods for request to yumpu api; default is TRUE;
// logFilePath - path to the log file ;
// uploadPath - pdfs' path location;
// yumpuEndpoints - full paths array for the yumpu api methods;
var c = {
    token: 'bkIzYsUTS6Eun5ALZwfiD38hN1tlOVKF',
    returnFormat: 'array',
    endpointDomain: 'api.yumpu.com',
    endpointSearchDomain: 'search.yumpu.com',
    debug: 'FALSE',
    logFilePath: 'yumpu_log.txt',
    uploadPath: ''
};
var yumpuEndpoints = {
    userGet: '/2.0/user.json',
    userPost: '/2.0/user.json',
    userPut: '/2.0/user.json',
    documentGet: '/2.0/document.json',
    documentPostFile: '/2.0/document/file.json',
    documentPostUrl: '/2.0/document/url.json',
    documentProgress: '/2.0/document/progress.json',
    documentsGet: '/2.0/documents.json',
    documentDelete: '/2.0/document.json',
    documentPut: '/2.0/document.json',
    hotspotsGet: '/2.0/document/hotspots.json',
    hotspotGet: '/2.0/document/hotspot.json',
    hotspotPost: '/2.0/document/hotspot.json',
    hotspotPut: '/2.0/document/hotspot.json',
    hotspotDelete: '/2.0/document/hotspot.json',
    collectionGet: '/2.0/collection.json',
    collectionPost: '/2.0/collection.json',
    collectionPut: '/2.0/collection.json',
    collectionDelete: '/2.0/collection.json',
    collectionsGet: '/2.0/collections.json',
    sectionGet: '/2.0/collection/section.json',
    sectionPost: '/2.0/collection/section.json',
    sectionPut: '/2.0/collection/section.json',
    sectionDelete: '/2.0/collection/section.json',
    sectionDocumentPost: '/2.0/collection/section/document.json',
    sectionDocumentDelete: '/2.0/collection/section/document.json',
    categoriesGet: '/2.0/document/categories.json',
    countriesGet: '/2.0/countries.json',
    languagesGet: '/2.0/document/languages.json',
    searchGet: '/2.0/search.json',
    // mediaGet: '/2.0/media.json',
    // mediaPut: '/2.0/media.json',
    // mediaDelete: '/2.0/media.json',
    // mediaPost: '/2.0/media.json',
    // mediasGet: '/2.0/medias.json',
    membersGet: '/2.0/account/members.json',
    subscriptionsGet: '/2.0/account/subscriptions.json',
    subscriptionGet: '/2.0/account/subscription.json',
    subscriptionPut: '/2.0/account/subscription.json',
    subscriptionPost: '/2.0/account/subscription.json',
    subscriptionDelete: '/2.0/account/subscription.json',
    accessTagsGet: '/2.0/account/access_tags.json',
    accessTagGet: '/2.0/account/access_tag.json',
    accessTagPut: '/2.0/account/access_tag.json',
    accessTagDelete: '/2.0/account/access_tag.json',
    accessTagPost: '/2.0/account/access_tag.json',
    memberGet: '/2.0/account/member.json',
    memberPut: '/2.0/account/member.json',
    memberDelete: '/2.0/account/member.json',
    memberPost: '/2.0/account/member.json',
    embedsGet: '/2.0/embeds.json',
    embedGet: '/2.0/embed.json',
    embedPost: '/2.0/embed.json',
    embedPut: '/2.0/embed.json',
    embedDelete: '/2.0/embed.json'
};
var config = function() {}
config.prototype.getYumpuConfig = function() {
    return c;
}
config.prototype.getYumpuEndpoints = function() {
    return yumpuEndpoints;
}


module.exports = config;
// module.exports = ;
