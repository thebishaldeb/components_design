import React from "react";
import "../App.css";
import { Layout, Menu, Row, Col, Card, Form, Input, Button } from "antd";
import CheckoutSteps from "../components/CheckoutSteps";
import OrderCard from "../components/OrderCard";
import naruto2 from "../resources/naruto2.jpg";

const { Item } = Menu;
const { Sider } = Layout;

export default class CheckoutPay extends React.Component {
  state = {
    product: {
      name:
        "Canon EOS 70D DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5- 5.6 IS ",
      image: naruto2,
      days: 4,
      date: {
        start: "04 Jan'19",
        end: "07 Jan'19"
      },
      refund: 5000,
      totalRent: 1300
    }
  };

  render() {
    return (
      <div style={{ padding: "20px 8%" }}>
        <Row gutter={32}>
          <CheckoutSteps step={2} />
          <Col lg={6} sm={10} style={{ border: "0.5px solid #ddd" }}>
            <div
              style={{
                minWidth: "100%",
                overflow: "hidden"
              }}
            >
              <Sider
                width={550}
                style={{ background: "#fff", padding: "40px 0" }}
              >
                <h4 style={{ padding: "0 20px" }}>
                  <strong>Choose payment option</strong>
                </h4>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                  className="AccountDetails"
                >
                  <Item className="AccDetItem" key="1">
                    Debit Card
                  </Item>
                  <Item className="AccDetItem" key="2">
                    Credit Card
                  </Item>
                  <Item className="AccDetItem" key="3">
                    Net Banking
                  </Item>
                  <Item className="AccDetItem" key="4">
                    UPI
                  </Item>
                </Menu>
              </Sider>
            </div>
          </Col>
          <Col lg={9} sm={14}>
            <Card style={{ border: "solid 0.5px #23b195", marginBottom:"20px" }}>
              <h4 style={{ paddingBottom: "20px" }}>
                <strong>Enter Card Details</strong>
              </h4>
              <Form layout="vertical">
                <Form.Item>
                  <Input placeholder="Name on card" type="text" style={{ border: "solid 0.5px #23b195", padding:"20px" }} />
                </Form.Item>
                <Form.Item >
                  <Input placeholder="Card Number" type="text" style={{ border: "solid 0.5px #23b195", padding:"20px" }} />
                </Form.Item>
                <Row gutter={32}>
                  <Col span={12}>
                    <Form.Item >
                      <Input placeholder="Expiry date" type="text" style={{ border: "solid 0.5px #23b195", padding:"20px" }}/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item >
                      <Input placeholder="CVV" type="text" style={{ border: "solid 0.5px #23b195", padding:"20px" }}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button
                  
                    style={{
                        border: "solid 0.5px #23b195",
                      padding: "5px 10%",
                      float: "right"
                    }}
                  >
                    <h4 style={{textShadow:"0.5px 0 0", color:"#23b195"}}>Add Card</h4>
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col
            lg={{ span: 8, offset: 0 }}
            sm={{ span: 18, offset: 3 }}
            xs={{ span: 22, offset: 1 }}
          >
            <OrderCard
              product={this.state.product}
              paid={false}
              buttonText={"Place order"}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
