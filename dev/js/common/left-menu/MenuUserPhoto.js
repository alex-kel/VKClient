/**
 * Created by aydar on 07.08.15.
 */
var React = require('react');
var classnames = require('classnames');
var Store = require('../Store');

var UserPhoto = React.createClass({
    getInitialState: function(){
        return{
            photo: ''
        }
    },
    setPhoto: function () {
        this.setState({photo: Store.authUserInfo['photo_200']});
    },
    componentDidMount: function(){
        var self = this;
        Store.bind('authUserInfo', self.setPhoto);
    },
    render: function(){
        var item = this.props.item;
        var classes = classnames('left-menu-item', 'list-menu-item-photo');
        var img = '';
        if (this.state.photo.length){
            img = (<img src={this.state.photo} className="img-responsive img-circle"/>)
        }
        return (
            <div className={classes}>
                {img}
            </div>
        )
    }
});

module.exports = UserPhoto;