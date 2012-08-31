/**
 * Created with JetBrains WebStorm.
 * User: zhangzc
 * Date: 12-8-27
 * Time: 下午4:15
 * To change this template use File | Settings | File Templates.
 */
var now = new Date();
var jsdom = require('jsdom');

jsdom.env('http://marshal.easymorse.com', [
    'http://code.jquery.com/jquery-1.8.0.min.js'
],
    function (errors, window) {
        console.log('本页有', window.$('div .post').length, '篇文章');
        var time = new Date().getTime() - now.getTime();
        console.log('耗时：' + time + 'ms');
        window.$("a").each(function(i){
            console.log(window.$(this).attr("href"),'===',window.$(this).text());
        })
    });