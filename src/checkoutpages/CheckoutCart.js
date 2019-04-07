import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Row, Col, Button, Steps, Card, Icon } from "antd";

const Step = Steps.Step;

export default class Cart extends React.Component {
  state = {
    products: {
      image: "https://www.adorama.com/alc/wp-content/uploads/2017/06/gopro.jpg",
      title: "Nikon",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
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
          margin: "20px 0",
          width: "100%%",
          borderRadius: "9px",
          boxShadow: "0 0 10px 4px rgba(49, 196, 167, 0.09)"
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
      <div style={{padding:"20px "}}>
        <Row>
          <Col md={{ span: 14, offset: 5 }} sm={{ span: 22, offset: 1 }}>
            <div className="checkout">Checkout</div>
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
        </Row>
        <Row gutter={16}>
          <Col
            style={{ margin: "20px 0" }}
            md={16}
            sm={{ span: 22, offset: 1 }}
          >
            <CartItem products={this.state.products} />
          </Col>
          <Col md={8} sm={{ span: 18, offset: 3 }} xs={{ span: 22, offset: 1 }}>
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
      <div className="cartItem">
        <Card className="cartCard">
          <img className="cartImg" src={this.props.products.image} />
          <Row className="cartDes">
            <div className="cartTitle">{this.props.products.title}</div>
            <Col style={{ paddingRight: "3%" }} sm={12} md={12} xl={12}>
              Refundundable deposit
              <br />
              <strong style={{ color: "#23b195" }}>
                &#8377; {this.props.products.refund}
              </strong>
              <br />
              Rental period <br />
              <strong>
                {this.props.products.date.start} -{" "}
                {this.props.products.date.end}
              </strong>
            </Col>
            <Col sm={12} md={12} xl={12}>
              Rent <br />
              <strong>&#8377; {this.props.products.rent}</strong>
              <br />
              Days: <br />
              <strong>{this.props.products.days}</strong>
            </Col>
          </Row>
          <div
            style={{ float: "right", position: "absolute", top: 0, right: 0 }}
          >
            <Button style={{ border: 0 }}>
              <Icon type="edit" />
            </Button>
            <Button style={{ border: 0 }}>
              <Icon type="close" />
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}
