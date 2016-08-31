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
    token: 'yourToken',
    endpointDomain: 'api.yumpu.com',
    endpointSearchDomain: 'search.yumpu.com',
    version: '/2.0/',
    logFilePath: './yumpu-log.log'
};
var yumpuEndpoints = {
    userGet: c.version + 'user.json',
    userPost: c.version + 'user.json',
    userPut: c.version + 'user.json',
    documentGet: c.version + 'document.json',
    documentPostFile: c.version + 'document/file.json',
    documentPostUrl: c.version + 'document/url.json',
    documentProgress: c.version + 'document/progress.json',
    documentsGet: c.version + 'documents.json',
    documentDelete: c.version + 'document.json',
    documentPut: c.version + 'document.json',
    hotspotsGet: c.version + 'document/hotspots.json',
    hotspotGet: c.version + 'document/hotspot.json',
    hotspotPost: c.version + 'document/hotspot.json',
    hotspotPut: c.version + 'document/hotspot.json',
    hotspotDelete: c.version + 'document/hotspot.json',
    collectionGet: c.version + 'collection.json',
    collectionPost: c.version + 'collection.json',
    collectionPut: c.version + 'collection.json',
    collectionDelete: c.version + 'collection.json',
    collectionsGet: c.version + 'collections.json',
    sectionGet: c.version + 'collection/section.json',
    sectionPost: c.version + 'collection/section.json',
    sectionPut: c.version + 'collection/section.json',
    sectionDelete: c.version + 'collection/section.json',
    sectionDocumentPost: c.version + 'collection/section/document.json',
    sectionDocumentDelete: c.version + 'collection/section/document.json',
    categoriesGet: c.version + 'document/categories.json',
    countriesGet: c.version + 'countries.json',
    languagesGet: c.version + 'document/languages.json',
    searchGet: c.version + 'search.json',
    // mediaGet: c.version + 'media.json',
    // mediaPut: c.version + 'media.json',
    // mediaDelete: c.version + 'media.json',
    // mediaPost: c.version + 'media.json',
    // mediasGet: c.version + 'medias.json',
    membersGet: c.version + 'account/members.json',
    subscriptionsGet: c.version + 'account/subscriptions.json',
    subscriptionGet: c.version + 'account/subscription.json',
    subscriptionPut: c.version + 'account/subscription.json',
    subscriptionPost: c.version + 'account/subscription.json',
    subscriptionDelete: c.version + 'account/subscription.json',
    accessTagsGet: c.version + 'account/access_tags.json',
    accessTagGet: c.version + 'account/access_tag.json',
    accessTagPut: c.version + 'account/access_tag.json',
    accessTagDelete: c.version + 'account/access_tag.json',
    accessTagPost: c.version + 'account/access_tag.json',
    memberGet: c.version + 'account/member.json',
    memberPut: c.version + 'account/member.json',
    memberDelete: c.version + 'account/member.json',
    memberPost: c.version + 'account/member.json',
    embedsGet: c.version + 'embeds.json',
    embedGet: c.version + 'embed.json',
    embedPost: c.version + 'embed.json',
    embedPut: c.version + 'embed.json',
    embedDelete: c.version + 'embed.json'
};
var config = function() {}
config.prototype.getYumpuConfig = function() {
    return c;
}
config.prototype.getYumpuEndpoints = function() {
    return yumpuEndpoints;
}
config.prototype.setToken = function(token){
  c.token = token;
}

module.exports = config;
