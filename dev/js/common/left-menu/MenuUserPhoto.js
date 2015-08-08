/**
 * Created by aydar on 07.08.15.
 */
var React = require('react');
var classnames = require('classnames');
var Store = require('../Store');
var Router = require('react-router');

var UserPhoto = React.createClass({
    mixins: [Router.Navigation],
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
    goToMyProfile: function(){
        this.transitionTo("myProfile")
    },
    getImage: function(){
        if (this.state.photo.length){
            return (
                <img src={this.state.photo} className="img-responsive img-circle"/>
            )
        } else{
            return '';
        }
    },
    render: function(){
        var item = this.props.item;
        var classes = classnames('left-menu-item', 'list-menu-item-photo');
        return (
            <div className={classes} onClick={this.goToMyProfile}>
                {this.getImage()}
            </div>
        )
    }
});

module.exports = UserPhoto;