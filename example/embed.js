// include yumpu sdk
var yumpu = require('../yumpu');
// make an instance of the Yumpu sdk class;
var y = new yumpu();
// set your token ... y.setToken('yourToken');

/**
 * @api {get} http://api.yumpu.com/2.0/embed.json getEmbed()
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
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] params = {};
 * String[] returnFields = { "id" };
 * JSONObject json = new JSONObject(y.getEmbed("rU3W05fqP9kZGnYw", params, returnFields));
 *
 * @apiParam {String} id One of your embed ids
 * @apiParam {String} [return_fields] Customize the responses by setting the return fields (‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘).
      <br/><br/><b>Default:</b> ‚id‘, ‚user_id‘, ‚document_id‘, ‚type‘, ‚create_date‘, ‚code‘, ’settings‘
 * @apiParam {Link} types <a href="http://developers.yumpu.com/api/embed/post/" target="_blank">Link to yumpu</a>
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

/**
 * @api {post} http://api.yumpu.com/2.0/embed.json postEmbed()
 * @apiVersion 1.0.0
 * @apiName Embed post
 * @apiGroup Embed
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'zKtHE23d6R0qT1rf',
 *    document_id: '11199',
 *    type: 2,
 *    width: 500,
 *    background_shape: 'square',
 *    color: 'grey',
 *    destination: 'magazinePage'
 *  }';
 *  yumpu.postEmbed(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * String[] body = {"document_id=55875854", "type=1", "start_page=2", "width=619"};
 * JSONObject json = new JSONObject(y.postEmbed(body));
 *
 * @apiParam {String} document_id One of your document ids or a public document id from the Yumpu Users
 * @apiParam {String} type 1 (player), 2 (logo), 3 (link), 4 (button), 5 (cover) or 7 (player_preset)
 * @apiParam {Link} types <a href="http://developers.yumpu.com/api/embed/post/" target="_blank">Link to yumpu</a>
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

/**
 * @api {put} http://api.yumpu.com/2.0/embed.json putEmbed()
 * @apiVersion 1.0.0
 * @apiName Embed put
 * @apiGroup Embed
 *
 *
 * @apiHeaderExample {js} Java-Script-Example:
 *  var yumpu = require('yumpu.js');
 *  var parameters = '{
 *    id: 'zKtHE23d6R0qT1rf',
 *    document_id: '11199',
 *    type: 1,
 *    width: 800,
 *    outline_enabled: 'y',
 *    outline_size: '5',
 *    outline_color: '0000000',
 *    title_font_color: '0000000',
 *    background_color: 'CCCCCC',
 *  }';
 *  yumpu.putEmbed(parameters, function(statusCode, document){
 *     console.log('Status: ' + statusCode);
 *     console.log(document);
 *  });
 *
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.putEmbed("lrQUW1EPLz5ey8bO", "55869263", "1"));
 *
 * @apiParam {String} document_id One of your document ids or a public document id from the Yumpu Users
 * @apiParam {String} type 1 (player), 2 (logo), 3 (link), 4 (button), 5 (cover) or 7 (player_preset)
 * @apiParam {Link} types <a href="http://developers.yumpu.com/api/embed/post/" target="_blank">Link to yumpu</a>
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
      "embed": {
        "id": "zKtHE23d6R0qT1rf",
        "user_id": 10000,
        "document_id": "11199",
        "type": "1",
        "create_date": "2014-12-03 10:57:49",
        "code": "iframe",
        "settings": {
            "background_color": "CCCCCC",
            "fullscreen_background_color": "253139",
            "height": "580",
            "outline_color": "000000",
            "outline_enabled": "1",
            "outline_size": "5",
            "page_view": "double_page",
            "player_autoflip_enabled": "2",
            "player_c2r_destination": "fullscreen",
            "player_c2r_enabled": "1",
            "player_c2r_text": "Click to read",
            "player_c2r_type": "buttonClassic",
            "player_mobile_enabled": "1",
            "player_type": "2",
            "start_page": "1",
            "text_font_style": "off",
            "text_font_weight": "off",
            "title_font_color": "000000",
            "title_font_family": "ABeeZee:regular:latin",
            "title_font_size": "14",
            "title_font_style": "off",
            "title_font_weight": "off",
            "username_enabled": "1",
            "width": "800"
          },
      "update_date": "2014-12-16 11:28:37"
      },
      "state": "success",
      "completed_in": "0.4333"
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
y.putEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});

/**
 * @api {delete} http://api.yumpu.com/2.0/embed.json deleteEmbed()
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
 * @apiHeaderExample {java} Java-Example:
 * Yumpu y = new Yumpu();
 * JSONObject json = new JSONObject(y.deleteEmbed("lrQUW1EPLz5ey8bO"));
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
    id: 'viNn5QAeXWDYryt4'
};
y.deleteEmbed(parameters, function(statusCode, document) {
    console.log('Status: ' + statusCode)
    console.log(document);
});
