var React = require('react');
var ReactDOM = require('react-dom');

var my_component = React.createClass({
  render: function() {
    return React.DOM.h1(null, "React Level-Up!");
  }
});

var my_factory = React.createFactory(my_component);

//ReactDOM.render(React.createElement(my_component),document.getElementById("headline"));
ReactDOM.render(my_factory(), document.getElementById("headline"));

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
