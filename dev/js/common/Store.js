/**
 * Created by aydar on 07.08.15.
 */
var events = require('./lib/microEvents');
var UserApi = require('./vk-api/UserApi');
var localstorage = require('./localstorage');
var Store = {
    authUserInfo: {},
    loadUserInfo: function(){
        UserApi.loadUser(localstorage.getUserId(), function (data) {
            Store.authUserInfo = data;
            Store.trigger("authUserInfo");
        });
    }
};

events.mixin(Store);

module.exports = Store;
