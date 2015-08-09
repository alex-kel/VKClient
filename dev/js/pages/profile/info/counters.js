/**
 * Created by aydar on 09.08.15.
 */
var React = require('react');
var Info = React.createClass({
    render: function(){
        if (this.props.user != null){
            var user = this.props.user;
            var info = user.counters.map(function(counter){
                return (
                    <div className="card" key={counter.value}>
                        <div className="card-item">{counter.displayName}</div>
                        <div className="card-item">{counter.value}</div>
                    </div>
                )
            });
            return (
                <div className="profile-info-counters">
                    {info}
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