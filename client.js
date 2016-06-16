var React = require('react');
var ReactDOM = require('react-dom');
var Remarkable = require('remarkable')

var SkillTable = React.createClass({
  render: function() {
    return (
      <div id="enclosing_tag_required_by_react">
        <h1>{this.props.test_property}</h1>
        <div clasName="jumbotron">
          <div className="container">
            <div className="skill_table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Beginner</th>
                    <th>Intermediate</th>
                    <th>Advanced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Databses</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
            </div> {/*end container*/}
          </div>
        </div>
      </div>

    )
  }
});

ReactDOM.render(<SkillTable test_property={"test property"}/>,
                document.getElementById('skill_table_insertion_point'));

/*
var my_component = React.createClass({
  render: function() {
    return React.DOM.h1(null, "React Level-Up!");
  }
});

var my_factory = React.createFactory(my_component);

//ReactDOM.render(React.createElement(my_component),document.getElementById("headline"));
ReactDOM.render(my_factory(), document.getElementById("headline"));
*/

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        {/*<CommentForm />*/}
        {/*<p>{this.props.other_data}</p>*/}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

/*
var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});
*/

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var new_data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var string = "hi";

ReactDOM.render(
  <CommentBox other_data={string} data={new_data} />,
  document.getElementById('content')
);
