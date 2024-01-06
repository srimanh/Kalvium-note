import { Component } from "react";


class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div className="input-components">
        <div className="input">
          <h3>Input:</h3>
          <textarea
            className="input-text"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="output">
          <h3>Pro Note:</h3>
          <div className="output-text">{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Editor;