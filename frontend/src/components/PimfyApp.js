import React from "react";
import axios from "axios";
import Form from "./Form";
import Posts from "./Posts";
import { corsProxy, baseUrl } from "../config/url";

export default class PimfyApp extends React.Component {
  state = {
    posts: [
      {
        agenda_id: 1,
        description: "의자가 고장났어요",
        area: "과학도서관",
        creator: "example1",
        timestamp: "2019.05.22",
        like: "1",
        dislike: "0",
        comment: ["좋아요"]
      }
    ]
  };

  async componentDidMount() {
    // get all posts from DB and update
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(users.data);
    const response = await axios({
      method: "GET",
      url: corsProxy + baseUrl + "/Agendas"
    });
    console.log(response.data);
  }

  handleAddPost = async post => {
    if (post) {
      // upload to DB
      await axios.post(baseUrl + "/Agendas", {
        area: this.state.where,
        description: this.state.what
      });

      // get all posts from DB and update the state.
      const posts = await axios.get(baseUrl + "/Agendas");

      // update the state with the loaded posts from DB
      this.setState(() => ({
        posts
      }));
    }
  };

  handleUpVote = timestamp => {
    const newPosts = this.state.posts.slice();
    for (let post of newPosts) {
      if (post.timestamp === timestamp) {
        post.score = post.score + 1;
      }
    }
    this.setState(() => ({
      posts: newPosts
    }));
  };

  handleDownVote = timestamp => {
    const newPosts = this.state.posts.slice();
    for (let post of newPosts) {
      if (post.timestamp === timestamp) {
        post.score = post.score - 1;
      }
    }
    this.setState(() => ({
      posts: newPosts
    }));
  };

  render() {
    return (
      <div>
        <main>
          <Form handleAddPost={this.handleAddPost} />
          <Posts
            posts={this.state.posts}
            handleUpVote={this.handleUpVote}
            handleDownVote={this.handleDownVote}
          />
        </main>
      </div>
    );
  }
}
