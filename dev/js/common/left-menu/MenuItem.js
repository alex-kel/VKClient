/**
 * Created by aydar on 07.08.15.
 */
var React = require('react');
var classnames = require('classnames');
var MenuItem = React.createClass({
    render: function(){
        var item = this.props.item;
        var classes = classnames('left-menu-item', item.className);
        var iconClasses = classnames('icon', item.iconClass);
        return (
            <div className={classes}>
                <i className={iconClasses}></i>
                {item.displayName}
            </div>
        )
    }
});

module.exports = MenuItem;