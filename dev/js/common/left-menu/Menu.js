var React = require('react');
var MenuItem = require('./MenuItem');
var menuItems = require('./MenuItems');
var UserPhoto = require('./MenuUserPhoto');
var Store = require('../Store');

var MenuApp = React.createClass({
    componentDidMount:function(){
        Store.loadUserInfo();
    },
    render: function(){
        var key = 0;
        var items = menuItems.map(function(item){
            return (
                <MenuItem item={item} key={key++}/>
            )
        });
        return (
            <div className="left-menu">
                {items}
            </div>
        )
    }
});

module.exports = MenuApp;