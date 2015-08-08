/**
 * Created by aydar on 07.08.15.
 */
var Menu = require('./../../common/left-menu/Menu');
var React = require('react');
var UserApi = require('./../../common/vk-api/UserApi');
var ProfileTop = require('./top/top');

var Profile = React.createClass({
    getInitialState: function(){
        return{
            profile: {}
        }
    },
    componentDidMount: function(){
        var self = this;
        var userId = this.props.params.userId;
        if (!userId){
            userId = null;
        }
        UserApi.loadUser(userId , function(data){
            self.setState({profile: data.response[0]});
        })
    },
    render: function(){
        return (
            <div>
                <Menu/>
                <div className="content">
                    <div className="profile-block">
                        <ProfileTop user={this.state.profile}/>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = Profile;
