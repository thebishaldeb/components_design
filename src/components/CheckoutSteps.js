import React, { Component } from "react";
import "../App.css";
import { Steps,Col } from "antd";

const Step = Steps.Step;

class CheckoutSteps extends Component {
  render() {
    return (
      <Col md={{ span: 14, offset: 5 }} sm={{ span: 22, offset: 1 }}>
          <div style={{textAlign:"center", textShadow:"1px 0 0", fontSize:"30px", marginBottom:"19px"}}>Checkout</div>
            <Steps
              style={{ width: "100%", padding: "1% 0 50px 0" }}
              current={this.props.step}
            >
              <Step title={<span style={{ fontSize: "13px" }}>Cart</span>} />
              <Step
                title={
                  <span style={{ fontSize: "13px" }}>Billing Address</span>
                }
              />
              <Step
                title={
                  <span style={{ fontSize: "13px" }}>Payment options</span>
                }
              />
              <Step
                title={<span style={{ fontSize: "13px" }}>Order Status</span>}
              />
            </Steps>
      </Col>
    );
  }
}

export default CheckoutSteps;
