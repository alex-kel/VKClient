/**
 * Created by aydar on 07.08.15.
 */
var events = require('./lib/microEvents');
var UserApi = require('./vk-api/UserApi');

var Store = {
    authUserInfo: {},

    loadUserInfo: function(){
        UserApi.loadUser(null, function (data) {
            Store.authUserInfo = data.response[0];
            Store.trigger("authUserInfo");
        });
    }
};

events.mixin(Store);

module.exports = Store;
