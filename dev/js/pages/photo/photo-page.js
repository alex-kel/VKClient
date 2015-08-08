/**
 * Created by aydar on 08.08.15.
 */
var React = require('react');
var PhotoApi = require('../../common/vk-api/PhotoApi');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            photo: {}
        }
    },
    componentDidMount: function(){
        var self = this;
        PhotoApi.getPhoto(this.props.params.photoId, function(data){
            self.setState({photo: data.response[0]});
        });
    },
    render: function(){
        return(
            <div>
                <img src={this.state.photo['photo_604']} classes="img-responsive"/>
            </div>
        )
    }

});