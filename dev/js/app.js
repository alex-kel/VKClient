/**
 * Created by aydar on 08.08.15.
 */

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var React = require('react');

var Main = require('./pages/main-page');
var Profile = require('./pages/profile-page');
var Menu = require('./common/left-menu/Menu');

var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    getToken: function(){
        return localStorage.getItem('token');
    },
    render () {
        if (this.getToken()){
            return (
                <div>
                    <Menu/>
                    <div className="content">
                        <RouteHandler/>
                    </div>
                </div>
            )            
        } else{
            return (
                <div>
                    <RouteHandler/>
                </div>
            )
        }

    }
});


var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Main}/>
        <Route path="profile" name="profile" handler={Profile}/>
    </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.body);
});