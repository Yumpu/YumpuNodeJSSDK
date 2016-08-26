// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();

/**
 * @api {get} /embed.json getEmbed()
 * @apiVersion 1.0.0
 * @apiName Embed get
 * @apiGroup Embed
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'zKtHE23d6R0qT1rf'
 *  }';
 *  yumpu.getEmbed(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} id One of your embed ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘).
      <br/><br/><b>Default:</b> ‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "embed": {
        "id": "zKtHE23d6R0qT1rf",
        "user_id": 10000,
        "document_id": "11199",
        "type": "4",
        "create_date": "2014-12-03 10:57:49",
        "code": "iframe",
        "settings": {
          "background_color": 253139,
          "destination": "http:\/\/www.yumpu.com",
          "download_pdf_enabled": 1,
          "height": "100",
          "start_page": 1,
          "text_font_color": "0082b2",
          "text_font_family": "ABeeZee:regular:latin",
          "text_font_size": 14,
          "text_font_style": "off",
          "text_font_weight": "off",
          "width": "100"
        }
      },
      "state": "success",
      "completed_in": "0.0665"
    }
 *
 */
var parameters = {
    id: 'x9DGAmJpbIKCXo8W',
    return_fields: 'id,user_id,document_id,type'
};
y.getEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// post/create a new embed
// more details on : http://developers.yumpu.com/api/embed/post/
var parameters = {
    document_id: '55865141',
    type: 2,
    width: 500,
    background_shape: 'square',
    color: 'grey',
    destination: 'magazinePage'
};
y.postEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

// put/update an existing embed
// more details on : http://developers.yumpu.com/api/embed/put/
// PLEASE USE ONE OF YOUR EMBED IDS!!!
var parameters = {
    id: 'viNn5QAeXWDYryt4',
    document_id: '55865141',
    type: 2,
    width: 300,
    background_shape: 'square',
    color: 'grey',
    destination: 'magazinePage'
};
y.putEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {delete} /embed.json deleteEmbed()
 * @apiVersion 1.0.0
 * @apiName Embed delete
 * @apiGroup Embed
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'ygCbHF6N2XK0iNjO'
 *  }';
 *  yumpu.deleteEmbed(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 *
 * @apiParam {String} id One of your embed ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘).
      <br/><br/><b>Default:</b> ‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "state": "success",
      "completed_in": "0.8208"
    }
 *
 */
var parameters = {
    id: 'viNn5QAeXWDYryt4',
    document_id: '55865141',
    type: 2,
    width: 300,
    background_shape: 'square',
    color: 'grey',
    destination: 'magazinePage'
};
y.deleteEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
