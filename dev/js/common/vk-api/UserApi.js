/**
 * Created by aydar on 08.08.15.
 */
var $ = require('zepto-browserify').$;
var localstorage = require('../localstorage');
var API = require('./API');

module.exports.loadUser = function(userId, callback){
    var request_fields = "sex, bdate, city, country, photo_id, " +
        "photo_200, photo_400_orig, online, online_mobile, domain, has_mobile, " +
        "contacts, connections, site, education, universities, schools, can_post, " +
        "can_see_all_posts, can_see_audio, can_write_private_message, status, " +
        "last_seen, common_count, relation, relatives, counters, screen_name, " +
        "maiden_name, timezone, occupation,activities, interests, music, movies, " +
        "tv, books, games, about, quotes, personal, friend_status, military, career ";
    $.getJSON(API.url("users.get", { fields: request_fields, user_ids: userId}), callback);
};

