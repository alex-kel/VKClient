/**
 * Created by aydar on 08.08.15.
 */
var React = require('react');
var gui = requireNode("nw.gui");
var classnames = require('classnames');
var Photo = React.createClass({
    viewPhoto: function(){
        gui.Window.open("index.html#/photos/" + this.props.photoId, {toolbar: false,
            "position": "center"})
    },
    render: function(){
        var classes = classnames('img-responsive', {'img-circle': this.props.circle});
        if (this.props.background){
            var style= {"backgroundImage": 'url("' + this.props.src + '")'};
            return (
                <div className={this.props.classes} onClick={this.viewPhoto} style={style}>
                </div>
            )
        }
        return(
            <div className={this.props.classes} onClick={this.viewPhoto}>
                <img className={classes} src={this.props.src} />
            </div>
        )
    }
});

module.exports = Photo;