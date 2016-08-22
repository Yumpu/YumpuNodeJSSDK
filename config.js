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
    documentDelete: c.endpointDomain + 'document.json',
    documentPut: c.endpointDomain + 'document.json',
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
    sectionGet: c.endpointDomain + 'collection/section.json',
    sectionPost: c.endpointDomain + 'collection/section.json',
    sectionPut: c.endpointDomain + 'collection/section.json',
    sectionDelete: c.endpointDomain + 'collection/section.json',
    sectionDocumentPost: c.endpointDomain + 'collection/section/document.json',
    sectionDocumentDelete: c.endpointDomain + 'collection/section/document.json',
    categoriesGet: '/2.0/document/categories.json',
    countriesGet: '/2.0/countries.json',
    languagesGet: '/2.0/document/languages.json',
    searchGet: '/2.0/search.json',
    mediaGet: c.endpointDomain + 'media.json',
    mediaPut: c.endpointDomain + 'media.json',
    mediaDelete: c.endpointDomain + 'media.json',
    mediaPost: c.endpointDomain + 'media.json',
    mediasGet: c.endpointDomain + 'medias.json',
    membersGet: '/2.0/account/members.json',
    subscriptionsGet: '/2.0/account/subscriptions.json',
    subscriptionGet: c.endpointDomain + 'account/subscription.json',
    subscriptionPut: c.endpointDomain + 'account/subscription.json',
    subscriptionPost: c.endpointDomain + 'account/subscription.json',
    subscriptionDelete: c.endpointDomain + 'account/subscription.json',
    accessTagsGet: '/2.0/account/access_tags.json',
    accessTagGet: c.endpointDomain + 'account/access_tag.json',
    accessTagPut: c.endpointDomain + 'account/access_tag.json',
    accessTagDelete: c.endpointDomain + 'account/access_tag.json',
    accessTagPost: c.endpointDomain + 'account/access_tag.json',
    memberGet: c.endpointDomain + 'account/member.json',
    memberPut: c.endpointDomain + 'account/member.json',
    memberDelete: c.endpointDomain + 'account/member.json',
    memberPost: c.endpointDomain + 'account/member.json',
    embedsGet: '/2.0/embeds.json',
    embedGet: c.endpointDomain + 'embed.json',
    embedPost: c.endpointDomain + 'embed.json',
    embedPut: c.endpointDomain + 'embed.json',
    embedDelete: c.endpointDomain + 'embed.json'
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
