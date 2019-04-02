import React, { Component } from "react";
import "../App.css";
import { Layout, Row, Col, Form, Input, Button, Radio } from "antd";
import ListYGSteps from "../components/ListYGSteps";
import TextArea from "antd/lib/input/TextArea";

class ListTourGearOwner extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: "vertical"
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Row align="middle">
          <Col
            md={{ span: 14, offset: 5 }}
            sm={{ span: 20, offset: 3 }}
            style={{
              padding: "24px auto",
              background: "#fff"
            }}
          >
            <ListYGSteps step={0} />
            <Form layout="vertical">
              <Form.Item label={<strong>Email ID</strong>}>
                <Input placeholder="Email Address" type="email" />
              </Form.Item>
              <Form.Item label={<strong>Name</strong>}>
                <Input placeholder="Name" type="text" />
              </Form.Item>
              <Form.Item label={<strong>Mobile number</strong>}>
                <Input
                  addonBefore="+91"
                  placeholder="Enter your mobile number"
                />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label={<strong>Pin Code</strong>}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={<strong>City</strong>}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label={<strong>Address</strong>}>
                <TextArea rows="6" />
              </Form.Item>
              <Form.Item
                label={
                  <strong style={{ lineHeight: "13px" }}>
                    Add locations you serve
                  </strong>
                }
              >
                <p style={{ lineHeight: "13px", fontSize: "13px" }}>
                  Start entering the locality, landmark, zip code (Separated by
                  comma)
                </p>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    background: "#23b195",
                    color: "white",
                    padding: "0 10%",
                    float: "right"
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListTourGearOwner;
