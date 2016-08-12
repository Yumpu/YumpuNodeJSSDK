var c = {
    token: 'bkIzYsUTS6Eun5ALZwfiD38hN1tlOVKF',
    returnFormat: 'array',
    endpointDomain: 'http://api.yumpu.com/2.0/',
    endpointSearchDomain: 'http://search.yumpu.com/2.0/',
    debug: 'FALSE',
    logFilePath: 'yumpu_log.txt',
    uploadPath: 'xyz'
};
var yumpuEndpoints = {
    userGet: c.endpointDomain + 'user.json',
    userPost: c.endpointDomain + 'user.json',
    userPut: c.endpointDomain + 'user.json',
    documentGet: c.endpointDomain + 'document.json',
    documentPostFile: c.endpointDomain + 'document/file.json',
    documentPostUrl: c.endpointDomain + 'document/url.json',
    documentProgress: c.endpointDomain + 'document/progress.json',
    documentsGet: c.endpointDomain + 'documents.json',
    documentDelete: c.endpointDomain + 'document.json',
    documentPut: c.endpointDomain + 'document.json',
    collectionGet: c.endpointDomain + 'collection.json',
    collectionPost: c.endpointDomain + 'collection.json',
    collectionPut: c.endpointDomain + 'collection.json',
    collectionDelete: c.endpointDomain + 'collection.json',
    collectionsGet: c.endpointDomain + 'collections.json',
    sectionGet: c.endpointDomain + 'collection/section.json',
    sectionPost: c.endpointDomain + 'collection/section.json',
    sectionPut: c.endpointDomain + 'collection/section.json',
    sectionDelete: c.endpointDomain + 'collection/section.json',
    sectionDocumentPost: c.endpointDomain + 'collection/section/document.json',
    sectionDocumentDelete: c.endpointDomain + 'collection/section/document.json',
    categoriesGet: c.endpointDomain + 'document/categories.json',
    countriesGet: c.endpointDomain + 'countries.json',
    languagesGet: c.endpointDomain + 'document/languages.json',
    searchGet: c.endpointSearchDomain + 'search.json',
    mediaGet: c.endpointDomain + 'media.json',
    mediaPut: c.endpointDomain + 'media.json',
    mediaDelete: c.endpointDomain + 'media.json',
    mediaPost: c.endpointDomain + 'media.json',
    mediasGet: c.endpointDomain + 'medias.json',
    membersGet: c.endpointDomain + 'account/members.json',
    subscriptionsGet: c.endpointDomain + 'account/subscriptions.json',
    subscriptionGet: c.endpointDomain + 'account/subscription.json',
    subscriptionPut: c.endpointDomain + 'account/subscription.json',
    subscriptionPost: c.endpointDomain + 'account/subscription.json',
    subscriptionDelete: c.endpointDomain + 'account/subscription.json',
    accessTagsGet: c.endpointDomain + 'account/access_tags.json',
    accessTagGet: c.endpointDomain + 'account/access_tag.json',
    accessTagPut: c.endpointDomain + 'account/access_tag.json',
    accessTagDelete: c.endpointDomain + 'account/access_tag.json',
    accessTagPost: c.endpointDomain + 'account/access_tag.json',
    memberGet: c.endpointDomain + 'account/member.json',
    memberPut: c.endpointDomain + 'account/member.json',
    memberDelete: c.endpointDomain + 'account/member.json',
    memberPost: c.endpointDomain + 'account/member.json',
    embedsGet: c.endpointDomain + 'embeds.json',
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
