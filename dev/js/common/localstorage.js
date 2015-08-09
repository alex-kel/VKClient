/**
 * Created by aydar on 08.08.15.
 */
var NAMES = {
    TOKEN : 'token',
    USER_ID: 'user_id'
};

module.exports.getToken = function() {
    return localStorage.getItem(NAMES.TOKEN);
};

module.exports.setToken = function(token){
    localStorage.setItem(NAMES.TOKEN, token);
};

module.exports.getUserId = function(){
    return localStorage.getItem(NAMES.USER_ID)
};

module.exports.setUserId = function(userId){
    localStorage.setItem(NAMES.USER_ID, userId);
};
