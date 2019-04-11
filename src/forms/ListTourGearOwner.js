import React, { Component } from "react";
import "../App.css";
import { Row, Col, Form, Input, Button } from "antd";
import ListYGSteps from "../components/ListYGSteps";
import TextArea from "antd/lib/input/TextArea";

class ListTourGearOwner extends Component {
  render() {
    return (
      <div className="Listyourgearcards">
        <Row>
          <Col
            md={{ span: 14, offset: 5 }}
            sm={{ span: 20, offset: 2 }}
            className="LYGcol1"
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
                  <strong className="addLocThatYouServe">
                    Add locations you serve
                  </strong>
                }
              >
                <p className="startLoc">
                  Start entering the locality, landmark, zip code (Separated by
                  comma)
                </p>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button className="listSubmitButton">SUBMIT</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListTourGearOwner;
