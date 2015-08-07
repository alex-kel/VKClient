/**
 * Created by Alex on 15.07.15.
 */
var token = localStorage.getItem("token");
var user_id = localStorage.getItem("user_id");
var gui = requireNode("nw.gui");
var auth_settings = require('./common/settings/settings');

if (user_id !== null && token !== null) {
    window.location.href = "profile.html"
}

var auth = function() {
    var authWindow = gui.Window.open(auth_settings.auth_url, {"toolbar": false,
                                                "position": "center"});
    authWindow.on("loaded", function() {
        var url = this.window.location.href;
        var sharpInd = url.indexOf("#");
        var parameters = url.substr(sharpInd >= 0 ? sharpInd + 1 : 0);
        if (parameters.indexOf("access_token") >= 0) {
            token = getQueryVariable(parameters, "access_token");
            user_id = getQueryVariable("user_id");
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            localStorage.setItem("user_id", user_id);
            localStorage.setItem("token", token);
            authWindow.close();
            window.location.href = "profile.html"
        }
    });
};

function getQueryVariable(query, variable) {
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

var auth = window.document.getElementByid('authButton');
auth.addEventListener( "click", function(){
    auth();
} );
