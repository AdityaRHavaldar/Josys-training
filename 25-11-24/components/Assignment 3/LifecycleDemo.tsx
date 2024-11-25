import { Component } from "react";

interface LifecycleDemoState {
  count: number;
}

class LifecycleDemo extends Component<{}, LifecycleDemoState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount: Component is mounted");
  }

  componentDidUpdate(prevProps: {}, prevState: LifecycleDemoState) {
    console.log("componentDidUpdate: Component updated");
    if (prevState.count !== this.state.count) {
      console.log(
        `Count changed from ${prevState.count} to ${this.state.count}`
      );
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will be unmounted");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("render: Component rendering");
    return (
      <div>
        <h2>Lifecycle Methods Demo (Class Component)</h2>
        <p>Count: {this.state.count}</p>
        <button className="submit button" onClick={this.handleIncrement}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
