/**
 * Created by aydar on 08.08.15.
 */
var $ = require('zepto-browserify').$;
var localstorage = require('../localstorage');
var API = require('./API');
var countersMap = require('./mapping/counters');

module.exports.loadUser = function(userId, callback){
    if (!userId){
        userId = localstorage.getUserId();
    }
    $.getJSON(API.url("execute.user_profile", { user_ids: userId}), function(data){
        var user = data.response[0];
        user.photo = data.response.photo[0];
        user.counters = countersMap(user.counters);
        callback(user);
    });
};

