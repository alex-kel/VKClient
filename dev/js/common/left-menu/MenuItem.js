/**
 * Created by aydar on 07.08.15.
 */
var React = require('react');
var classnames = require('classnames');
var MenuItem = React.createClass({
    render: function(){
        var item = this.props.item;
        var classes = classnames('menu-item', item.className);
        return (
            <div className={classes}>
                {item.displayName}
            </div>
        )
    }
});

module.exports = MenuItem;