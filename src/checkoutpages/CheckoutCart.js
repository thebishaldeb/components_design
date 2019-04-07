import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Row, Col, Button, Steps, Card, Icon } from "antd";
import naruto2 from "../resources/naruto2.jpg";
const Step = Steps.Step;

export default class Cart extends React.Component {
  state = {
    products: {
      name: "Just a random name to fill the space",
      image: naruto2,
      days: 4,
      date: {
        start: "04 Jan'19",
        end: "07 Jan'19"
      },
      refund: 3000,
      rent: 200
    }
  };

  cartTotal() {
    return (
      <Card
        style={{
          margin: "20px 0"
        }}
      >
        <h2 style={{ textShadow: "0.5px 0 0", fontSize: "19px" }}>
          Cart Summary
        </h2>
        <p style={{ fontSize: "12px" }}>
          Rent per day{" "}
          <div style={{ float: "right" }}>
            &#8377; {this.state.products.rent}
          </div>
        </p>
        <p style={{ fontSize: "12px" }}>
          Service fee <div style={{ float: "right" }}>&#8377; 100</div>
        </p>
        <p style={{ fontSize: "12px" }}>
          &#8377; {this.state.products.rent}/- <Icon type="close" />{" "}
          {this.state.products.days}days{" "}
          <div style={{ float: "right" }}>
            &#8377; {this.state.products.rent * this.state.products.days}
          </div>
        </p>
        <p style={{ fontSize: "12px" }}>
          25% Multi day discount{" "}
          <div style={{ float: "right", color: "#23b195" }}>
            -&#8377;
            {0.25 * this.state.products.rent * this.state.products.days}
          </div>
        </p>
        <br />
        <h3>
          Total rent amount{" "}
          <strong style={{ float: "right", color: "#23b195" }}>
            &#8377;
            {this.totalAmount(this.state.products)}
          </strong>
        </h3>
        <p style={{ fontSize: "12px" }}>
          Refundable deposit{" "}
          <div style={{ float: "right" }}>
            &#8377; {this.state.products.refund}
          </div>
        </p>
        <br />
        <Button
          style={{
            background: "#23b195",
            color: "#fff",
            borderRadius: "4px"
          }}
          block
        >
          Checkout
        </Button>
      </Card>
    );
  }
  totalAmount(cart) {
    let total = cart.rent * cart.days;
    total -= 0.25 * total;
    total += 100;
    return total;
  }
  render() {
    return (
      <div style={{ padding: "20px 8%" }}>
        <Row>
          <Col md={{ span: 14, offset: 5 }} sm={{ span: 22, offset: 1 }}>
            <div style={{textAlign:"center", textShadow:"1px 0 0", fontSize:"30px", marginBottom:"19px"}}>Checkout</div>
            <Steps
              style={{ width: "100%", padding: "1% 0 50px 0" }}
              current={0}
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
          <Col span={12}>
            <div style={{ fontSize: "14px" }}>
              <strong>My cart - </strong>1 items
            </div>
            <div style={{ fontSize: "14px" }}>
              Total rent: <strong>&#8377; {this.state.products.rent} </strong>
            </div>
          </Col>
          <Col span={12}>
            <Link
              to=""
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.2px",
                color: "#23b195"
              }}
            >
              Add more products
            </Link>
          </Col>
          <Col
            style={{ margin: "20px 0" }}
            md={13}
            sm={{ span: 22, offset: 1 }}
          >
            <CartItem products={this.state.products} />
          </Col>
          <Col
            lg={7}
            md={8}
            sm={{ span: 18, offset: 3 }}
            xs={{ span: 22, offset: 1 }}
          >
            {this.cartTotal()}
          </Col>
        </Row>
      </div>
    );
  }
}

class CartItem extends React.Component {
  render() {
    return (
      <Row style={{borderRadius: "9px",
        boxShadow: "0 0 10px 4px rgba(49, 196, 167, 0.09)",}}>
        <Col span={8}>
          <img
            style={{ width: "100%", height: 160 }}
            src={this.props.products.image}
          />
        </Col>
        <Col span={16} style={{ padding: "12px 15px" }}>
          <Row
            style={{
              fontSize: "12px"
            }}
          >
            <Col span={16}>
              <h3
                style={{
                  fontSize: "14px",
                  color: "#4a4a4a",
                  marginBottom: "2%",
                  overflow: "hidden"
                }}
              >
                {this.props.products.name}
              </h3>
            </Col>
            <Col lg={10} sm={12} xs={13} style={{ fontSize: "11.5px" }}>
              Refundundable deposit
              <br />
              <strong style={{ color: "#23b195" }}>
                &#8377; {this.props.products.refund}
              </strong>
              <br />
              <br />
              Rental period <br />
              <strong>
                {this.props.products.date.start} -{" "}
                {this.props.products.date.end}
              </strong>
            </Col>
            <Col lg={10} sm={12} xs={11} style={{ fontSize: "11.5px" }}>
              Rent <br />
              <strong>&#8377; {this.props.products.rent}</strong>
              <br />
              <br />
              Days: <br />
              <strong>{this.props.products.days}</strong>
            </Col>
          </Row>
        </Col>
        <div
          style={{
            float: "right",
            position: "absolute",
            top: 0,
            right: 0,
            overflow: "hidden"
          }}
        >
          <Button style={{ border: 0 }}>
            <Icon type="edit" />
          </Button>
          <Button style={{ border: 0 }}>
            <Icon type="close" />
          </Button>
        </div>
      </Row>
    );
  }
}
