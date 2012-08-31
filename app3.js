var http = require('http');
var urlhost = http.createClient(80, 'news.china.com.cn');
var request = urlhost.request('GET', '/2012-08/28/content_26348401.htm');
request.end();
request.on('response', function (response) {
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});