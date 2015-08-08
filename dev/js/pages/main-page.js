/**
 * Created by Alex on 15.07.15.
 */
var token = localStorage.getItem("token");
var user_id = localStorage.getItem("user_id");
var gui = requireNode("nw.gui");
var auth_settings = require('./../common/settings/settings');
var React = require('react');
var Navigation = require('react-router').Navigation;

var Main = React.createClass({
    mixins: [Navigation],
    componentDidMount: function(){
        if (user_id !== null && token !== null) {
            this.transitionTo('profile');
        }
    },
    auth: function(){
        var self = this;
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
                self.transitionTo('profile');
            }
        });
    },
    render: function(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1
                        text-center
                        welcoming">
                        <p>Привет!</p>
                        <p>Войди с помощью аккаунта ВКонтакте, чтобы продолжить работу с клиентом.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3
                            col-sm-6 col-sm-offset-3
                            col-md-4 col-md-offset-4
                            col-lg-4 col-lg-offset-4
                            text-center">
                        <a className="btn btn-primary btn-lg" type="button" id="authButton" onClick={this.auth}>Войти</a>
                    </div>
                </div>
            </div>
        )
    }
});


function getQueryVariable(query, variable) {
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}


module.exports = Main;