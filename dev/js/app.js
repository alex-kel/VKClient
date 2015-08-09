/**
 * Created by aydar on 08.08.15.
 */

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var React = require('react');



var Main = require('./pages/main/main-page');
var Profile = require('./pages/profile/profile-page');
var Photos = require('./pages/photo/photo-page');

var localstorage = require('./common/localstorage');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render () {
        return (
            <div className="full-height">
                <RouteHandler/>
            </div>
        )

    }
});


var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Main}/>
        <Route path="/profile" name="myProfile" handler={Profile}/>
        <Route path="/profile/:userId" name="profile" handler={Profile}/>
        <Route path="/photos/:photoId" name="photo" handler={Photos}/>
    </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.body);
});