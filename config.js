var config = function() {


}
config.prototype.getYumpuConfig = function() {
    var c = {
        token: 'bkIzYsUTS6Eun5ALZwfiD38hN1tlOVKF',
        returnFormat: 'array',
        endpointDomain: 'http://api.yumpu.com/2.0/',
        endpointSearchDomain: 'http://search.yumpu.com/2.0/',
        debug: 'FALSE',
        logFilePath: 'yumpu_log.txt',
        uploadPath: 'xyz'
    };
    return c;
}
config.prototype.getYumpuEndpoints = function() {
    var yumpuEndpoints = {
        userGet: config.endpointDomain + 'user.json',
        userPost: config.endpointDomain + 'user.json',
        userPut: config.endpointDomain + 'user.json',
        documentGet: config.endpointDomain + 'document.json',
        documentPostFile: config.endpointDomain + 'document/file.json',
        documentPostUrl: config.endpointDomain + 'document/url.json',
        documentProgress: config.endpointDomain + 'document/progress.json',
        documentsGet: config.endpointDomain + 'documents.json',
        documentDelete: config.endpointDomain + 'document.json',
        documentPut: config.endpointDomain + 'document.json',
        collectionGet: config.endpointDomain + 'collection.json',
        collectionPost: config.endpointDomain + 'collection.json',
        collectionPut: config.endpointDomain + 'collection.json',
        collectionDelete: config.endpointDomain + 'collection.json',
        collectionsGet: config.endpointDomain + 'collections.json',
        sectionGet: config.endpointDomain + 'collection/section.json',
        sectionPost: config.endpointDomain + 'collection/section.json',
        sectionPut: config.endpointDomain + 'collection/section.json',
        sectionDelete: config.endpointDomain + 'collection/section.json',
        sectionDocumentPost: config.endpointDomain + 'collection/section/document.json',
        sectionDocumentDelete: config.endpointDomain + 'collection/section/document.json',
        categoriesGet: config.endpointDomain + 'document/categories.json',
        countriesGet: config.endpointDomain + 'countries.json',
        languagesGet: config.endpointDomain + 'document/languages.json',
        searchGet: config.endpointSearchDomain + 'search.json',
        mediaGet: config.endpointDomain + 'media.json',
        mediaPut: config.endpointDomain + 'media.json',
        mediaDelete: config.endpointDomain + 'media.json',
        mediaPost: config.endpointDomain + 'media.json',
        mediasGet: config.endpointDomain + 'medias.json',
        membersGet: config.endpointDomain + 'account/members.json',
        subscriptionsGet: config.endpointDomain + 'account/subscriptions.json',
        subscriptionGet: config.endpointDomain + 'account/subscription.json',
        subscriptionPut: config.endpointDomain + 'account/subscription.json',
        subscriptionPost: config.endpointDomain + 'account/subscription.json',
        subscriptionDelete: config.endpointDomain + 'account/subscription.json',
        accessTagsGet: config.endpointDomain + 'account/access_tags.json',
        accessTagGet: config.endpointDomain + 'account/access_tag.json',
        accessTagPut: config.endpointDomain + 'account/access_tag.json',
        accessTagDelete: config.endpointDomain + 'account/access_tag.json',
        accessTagPost: config.endpointDomain + 'account/access_tag.json',
        memberGet: config.endpointDomain + 'account/member.json',
        memberPut: config.endpointDomain + 'account/member.json',
        memberDelete: config.endpointDomain + 'account/member.json',
        memberPost: config.endpointDomain + 'account/member.json',
        embedsGet: config.endpointDomain + 'embeds.json',
        embedGet: config.endpointDomain + 'embed.json',
        embedPost: config.endpointDomain + 'embed.json',
        embedPut: config.endpointDomain + 'embed.json',
        embedDelete: config.endpointDomain + 'embed.json'
    };
    return yumpuEndpoints;
}


module.exports = config;
// module.exports = ;
