import React, { Component } from "react";
import "../App.css";
import { Steps } from "antd";

const Step = Steps.Step;

class ListYGSteps extends Component {
  render() {
    return (
      <div>
        <h1 className="listSteps">List your gear</h1>
        <br />
        <Steps current={this.props.step}>
          <Step title="Owner details" />
          <Step title="Product details" />
          <Step title="Rental details" />
        </Steps>
        <br />
        <br />
      </div>
    );
  }
}

export default ListYGSteps;
