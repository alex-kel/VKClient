/**
 * Created by aydar on 07.08.15.
 */
var React = require('react');
var classnames = require('classnames');
var MenuItem = React.createClass({
    render: function(){
        var item = this.props.item;
        var classes = classnames('main-menu-item', item.className);
        var iconClasses = classnames('icon', item.iconClass);
        return (
            <div className={classes}>
                <div>
                    <i className={iconClasses}></i>
                    <div className="main-menu-item-text">
                        {item.displayName}
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = MenuItem;