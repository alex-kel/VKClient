var React = require('react');
var MenuItem = require('./MenuItem');
var menuItems = require('./MenuItems');

var MenuApp = React.createClass({
    render: function(){
        var items = menuItems.map(function(item){
            return (
                <MenuItem item={item}/>
            )
        });
        return (
            <div className="left-menu">
                {items}
            </div>
        )
    }
});

React.render(
    <MenuApp/>,
    document.body
);