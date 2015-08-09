/**
 * Created by aydar on 08.08.15.
 */

var React = require('react');
var Photo = require('./../../../common/photo');
var Info = React.createClass({
    render: function(){
        if (this.props.user != null){
            var user = this.props.user;

            return (
                <div className="text-center profile-info">
                    <div className="profile-info-item profile-info-main">
                        <div className="profile-photo flex-grow-1">
                            <Photo circle={true} src={user['photo_100']} photoId={user.photo_id}/>
                        </div>
                        <div className="flex-grow-1">
                            <h4 className="profile-info-name">{user.first_name + ' ' + user.last_name}</h4>
                        </div>
                        <div className="profile-btn-group flex-grow-3">
                            <button className="btn btn-md btn-primary">Send message</button>
                            <button className="btn btn-md btn-success">Add to friends</button>
                        </div>
                    </div>

                </div>
            )
        } else{
            return (
                <div></div>
            )
        }
    }
});

module.exports = Info;