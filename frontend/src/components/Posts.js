import React from "react";
import Post from "./Post";

export default class Posts extends React.Component {
  render() {
    return (
      <div className="posts">
        <div className="container">
          {this.props.posts.map(post => {
            return (
              <Post
                post={post}
                key={post.timestamp}
                handleUpVote={this.props.handleUpVote}
                handleDownVote={this.props.handleDownVote}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
