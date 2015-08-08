/**
 * Created by aydar on 08.08.15.
 */
var $ = require('zepto-browserify').$;
var localstorage = require('../localstorage');
var API = require('./API');

module.exports.getPhoto = function(photoId, callback){
    $.getJSON(API.url("photos.getById", { photos: photoId}), callback);
};