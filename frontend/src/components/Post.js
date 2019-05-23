import React from "react";

// format of a POST
// {
//   agenda_id,
//   discription,
//   area,
//   creator,
//   timestamp,
//   like,
//   dislike,
//   comment,
// }

export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <h2 className="post__content">
          {this.props.post.agenda_id} {"과학도서관"} {"고쳐졌으면 좋겠는 내용"}{" "}
          {"작성자 ID"}
        </h2>
        <div className="post__vote">
          <div className="score">{"Like 갯수"}</div>
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
