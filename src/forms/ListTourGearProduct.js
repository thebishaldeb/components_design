import React, { Component } from "react";
import "../App.css";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import ListYGSteps from "../components/ListYGSteps";
import TextArea from "antd/lib/input/TextArea";
class ListTourGearProduct extends Component {
  state = {
    package: [
      "Naruto",
      "Sasuke",
      "Sakura",
      "Minato",
      "Jiraiya",
      "Tsunade",
      "Hinata",
      "Shikamaru",
      "Choji"
    ]
  };
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Row>
          <Col
            md={{ span: 14, offset: 5 }}
            sm={{ span: 20, offset: 2 }}
            style={{ padding: "24px auto", background: "#fff" }}
          >
            <ListYGSteps step={1} />
            <Form layout="vertical">
              <Form.Item label={<strong>Listing title</strong>}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label={<strong>Model name</strong>}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label={<strong>Brand Name</strong>}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label={<strong>In the package</strong>}>
                <p style={{ fontSize: "10px" }}>Select your offering</p>
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row gutter={16}>
                  {this.state.package.map(item => (
                    <Col span={12}>
                      <Checkbox value={item}>{item}</Checkbox>
                    </Col>
                  ))}
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label={<strong>Serial Number</strong>}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={<strong>Mount</strong>}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label={<strong>Add a description</strong>}>
                <TextArea rows="6" />
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
                  Next
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ListTourGearProduct;
