import React from "react";

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
        data-testid={this.props.testid}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square; 