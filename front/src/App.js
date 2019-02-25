import React, {Component} from "react";
import "./index.css";


class App extends React.Component{

  componentDidMount() {
    fetch("/api/getMessages")
      .then(res => console.log("got data?", res));
  }

  render() {
    console.log("Rendering");
    return (
      <div className="App">

        <h1>Comments!</h1>

        <div id="comments"></div>
        <form action="/api/createMessage">
          <input type="text" id="comment"/>
        </form>
        <div>Made by Freddy with Respect to John <span role="img">♥️</span></div>
      </div>
      ) 
  }
  
}

export default App