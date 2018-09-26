import React from "react";
import Button from "@material-ui/core/Button";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      label: ""
    };
  }

  componentWillMount() {
    this.setState({ label: this.props.label });
  }

  onChange() {
    var code = this.state.code;
    code = code + "e";
    this.setState({ code: code });
    console.log(this.state.code);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <Button variant="contained" color="primary" onClick={this.onChange}>
        {this.state.label}
      </Button>
    );
  }
}

export default TestComponent;
