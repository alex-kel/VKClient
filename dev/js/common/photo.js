/**
 * Created by aydar on 08.08.15.
 */
var React = require('react');
var gui = requireNode("nw.gui");
var Photo = React.createClass({
    viewPhoto: function(){
        gui.Window.open("index.html#/photos/" + this.props.photoId, {toolbar: false,
            "position": "center"})
    },
    render: function(){
        return(
            <div className={this.props.classes} onClick={this.viewPhoto}>
                <img className="img-responsive img-circle" src={this.props.src} />
            </div>)
    }
});

module.exports = Photo;