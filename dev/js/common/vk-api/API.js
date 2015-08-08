/**
 * Created by aydar on 08.08.15.
 */
var localstorage = require('../localstorage');
module.exports.url = function(method, params){
    var result = "https://api.vk.com/method/" + method + "?";
    for (var key in params){
        if (!params.hasOwnProperty(key) || !params[key]){
            continue;
        }
        result += key + '=' + params[key] + '&';
    }
    result += "v=5.35&access_token=" +localstorage.getToken();
    return result;
};

