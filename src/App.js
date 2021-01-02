import React from "react";
import "./style.css";

export class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: 1
      // show: true
    };
    console.log("constructor ");
  }

  componentWillMount() {
    this.setState({
      value: 0
    });
    console.log("component will mount", this.state.value);
  }

  componentDidMount() {
    console.log("Component did mount", this.state.value);
    this.setState({
      value: 22
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component Update", nextProps, nextState);
    return true;
    // return false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, nextState) {
    console.log("component did update", prevProps, nextState);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("rendering method;");
    return (
      <>
        <h1>App react Component {this.state.value}</h1>
        <button
          onClick={() =>
            this.setState({
              value: this.state.value + 1
              // show: !this.state.show
            })
          }
        >
          click me
        </button>
      </>
    );
  }
}

export default App;
