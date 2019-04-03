import React, { Component } from "react";
import "../App.css";
import { Row, Col, Form, Input, Button, Checkbox, Radio, div } from "antd";
import ListYGSteps from "../components/ListYGSteps";

class ListTourGearRental extends Component {
  state = {
    value: "excellent"
  };
  classNamesgroup(e) {
    if (this.state.value === e) {
      return "ActiveCond";
    } else {
      return "NotActive";
    }
  }
  renderCondition(e) {
    this.setState({ value: e });
  }
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Row>
          <Col
            md={{ span: 14, offset: 5 }}
            sm={{ span: 20, offset: 2 }}
            style={{
              padding: "24px auto",
              background: "#fff"
            }}
          >
            <ListYGSteps step={2} />
            <Form layout="vertical">
              <Form.Item label={<strong>Expected Rent</strong>}>
                <Row gutter={16}>
                  <Col md={6} xs={8}>
                    <Input type="rext" value="300" />
                  </Col>
                  <Col span={4}>
                    <span
                      style={{
                        color: "#5d5f5f",
                        fontSize: "12px",
                        lineHeight: "12px"
                      }}
                    >
                      per day
                    </span>
                  </Col>
                  <Col md={6} xs={8}>
                    <Input type="rext" value="300" />
                  </Col>
                  <Col span={4}>
                    <span
                      style={{
                        color: "#5d5f5f",
                        fontSize: "12px",
                        lineHeight: "12px"
                      }}
                    >
                      per week
                    </span>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label={<strong>Replacement Value</strong>}>
                <Row gutter={16}>
                  <Col md={6} xs={8}>
                    <Input type="rext" value="300" />
                  </Col>
                  <Col span={16}>
                    <span style={{ color: "#5d5f5f", fontSize: "10px" }}>
                      Note: Cost of Replacement in market value of the product,
                      incase of total damage or theft settlement will be upto
                      this amount.
                    </span>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label={<strong>Benefits you offer</strong>}>
                <Checkbox.Group style={{ width: "100%" }}>
                  <Col span={24}>
                    <Checkbox value="Delivery">Delivery</Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox value="Insurance">Insurance</Checkbox>
                  </Col>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item label={<strong>Product condition</strong>}>
                <p
                  style={{
                    color: "#5d5f5f",
                    fontSize: "10px",
                    lineHeight: "10px"
                  }}
                >
                  Select the one your product best fits into.
                </p>
                <Row gutter={24}>
                  <Col span={8}>
                    <div
                      onClick={e => this.renderCondition("excellent")}
                      className={this.classNamesgroup("excellent")}
                      style={{ fontSize: "12px", padding: "10%" }}
                    >
                      <h3> Excellent</h3>
                      <ul style={{ paddingLeft: "22px" }}>
                        {" "}
                        <li>No repair history</li>
                        <li>0-6 months old</li>
                        <li>Hardly used</li>
                        <li>No scratches</li>
                      </ul>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      onClick={e => this.renderCondition("good")}
                      className={this.classNamesgroup("good")}
                      style={{ fontSize: "12px", padding: "10%" }}
                    >
                      <h3> Good</h3>
                      <ul style={{ paddingLeft: "22px" }}>
                        {" "}
                        <li>Minor repairs</li>
                        <li>6 months - 1 year old</li>
                        <li>Normal usage</li>
                        <li>No scratches/ minor scatches</li>
                      </ul>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div
                      onClick={e => this.renderCondition("fairly used")}
                      className={this.classNamesgroup("fairly used")}
                      style={{ fontSize: "12px", padding: "10%" }}
                    >
                      <h3> Fairly used</h3>
                      <ul style={{ paddingLeft: "22px" }}>
                        {" "}
                        <li>No repair history</li>
                        <li>1-2 years old</li>
                        <li>Fair usage</li>
                        <li>Few scratches</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    background: "#23b195",
                    color: "white",
                    fontSize: "10px",
                    marginLeft: "20px",
                    float: "right",
                    width: "28%"
                  }}
                >
                  UPLOAD
                </Button>
                <Button
                  style={{
                    border: "0.5px #23b195 solid",
                    fontSize: "10px",
                    float: "right",
                    width: "28%"
                  }}
                >
                  SAVE AS DRAFT
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListTourGearRental;
