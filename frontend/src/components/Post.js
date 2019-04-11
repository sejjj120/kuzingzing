import React from "react";

export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <h3 className="post__content">
          {this.props.post.where} {this.props.post.how} {this.props.post.what}가
          생겼으면 좋겠어요.
        </h3>
        <div className="post__vote">
          <div className="score">{this.props.post.score}</div>
          <a
            className="post__upVote"
            onClick={() => {
              this.props.handleUpVote(this.props.post.timestamp);
            }}
          >
            <img src="./img/like.png" />
          </a>
          <button
            className="post__downVote"
            onClick={() => {
              this.props.handleDownVote(this.props.post.timestamp);
            }}
          >
            Down
          </button>
        </div>
      </div>
    );
  }
}
