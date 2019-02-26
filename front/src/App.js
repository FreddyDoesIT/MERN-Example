import React, { Component } from "react";
import "./index.css";

import Comment from "./Comment.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    fetch("/api/getMessages")
      .then(res => res.json())
      .then(data => {
        console.log("got data!", data);
        this.setState({
          comments: data
        });
      });
  }

  renderComments() {
    return this.state.comments.map((c, index) => {
      return <Comment key={index++} comment={c} />;
    });

    // let res = [];
    // let i = 0;
    // for (let c of this.state.comments) {
    //     res.push(<div key={i++}>{c.text}</div>);
    // }

    // console.log(res);

    // return res;
  }

  render() {
    console.log("Rendering");

    return (
      <div className="App">
        <h1>Comments!</h1>

        {this.renderComments()}

        <form action="/api/createMessage" method="POST">
          <input type="text" name="text" />
        </form>
        <h2>Can you make a change in the world?!</h2>
        <div>
          Made by Freddy with Respect to John 
          <span role="img">♥️</span>
        </div>
      </div>
    );
  }
}

export default App;
