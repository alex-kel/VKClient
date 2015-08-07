/**
 * Created by aydar on 07.08.15.
 */
var events = require('./lib/microEvents');
var $ = require('zepto-browserify').$;

var Store = {
    authUserInfo: {},
    getToken: function(){
        return localStorage.getItem('token');
    },
    loadUserInfo: function(){
        var self = this;
        var request_fields = "photo_200,city,online,online_mobile,status,last_seen,about";
        $.getJSON('https://api.vk.com/method/users.get?fields=' + request_fields + ' &v=5.35&access_token=' + self.getToken(),
            function (data) {
                Store.authUserInfo = data.response[0];
                Store.trigger("authUserInfo");
            });
    }
};

events.mixin(Store);

module.exports = Store;
