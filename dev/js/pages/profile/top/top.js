/**
 * Created by aydar on 08.08.15.
 */

var React = require('react');
var Photo = require('./../../../common/photo');
var Top = React.createClass({
    render: function(){
        return (
            <div className="profile-top-block text-center">
                <div className="profile-top-block-item">Settings</div>
                <div className="profile-top-block-item">
                    <Photo src={this.props.user['photo_200']} photoId={this.props.user['photo_id']}
                           classes="profile-image"/>
                </div>
                <div className="profile-top-block-item">Add to friend</div>

            </div>
        )
    }
});

module.exports = Top;