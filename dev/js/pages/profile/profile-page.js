/**
 * Created by aydar on 07.08.15.
 */
var Menu = require('./../../common/left-menu/Menu');
var React = require('react');
var UserApi = require('./../../common/vk-api/UserApi');
var ProfileInfo = require('./info/info');
var Counters = require('./info/counters');
var Wall = require('./wall/wall');

var Profile = React.createClass({
    getInitialState: function(){
        return{
            profile: null
        }
    },
    componentDidMount: function(){
        var self = this;
        var userId = this.props.params.userId;
        if (!userId){
            userId = null;
        }
        UserApi.loadUser(userId , function(data){
            self.setState({profile: data});
        })
    },
    render: function(){
        return (
            <div className="full-height">
                <Menu/>
                <div className="content">
                    <div className="profile-block full-height">
                        <div className="profile-block-item">
                            <ProfileInfo user={this.state.profile}/>
                        </div>
                        <div className="profile-block-item">
                            <Counters user={this.state.profile}/>
                        </div>
                        <div className="profile-block-item">
                            <Wall user={this.state.profile}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
});


module.exports = Profile;
