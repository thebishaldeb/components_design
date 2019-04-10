import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, Icon } from "antd";
import CheckoutSteps from "../components/CheckoutSteps";
import naruto2 from "../resources/naruto2.jpg";

export default class CheckoutCart extends React.Component {
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
        <div style={{ fontSize: "12px" }}>
          <p>
            Rent per day{" "}
            <div style={{ float: "right" }}>
              &#8377; {this.state.products.rent}
            </div>
          </p>
          <p>
            Service fee <div style={{ float: "right" }}>&#8377; 100</div>
          </p>
          <p>
            &#8377; {this.state.products.rent}/- <Icon type="close" />{" "}
            {this.state.products.days}days{" "}
            <div style={{ float: "right" }}>
              &#8377; {this.state.products.rent * this.state.products.days}
            </div>
          </p>
          <p>
            25% Multi day discount{" "}
            <div className="colorFloat">
              -&#8377;
              {0.25 * this.state.products.rent * this.state.products.days}
            </div>
          </p>
          <br />
          <h3>
            Total rent amount{" "}
            <strong className="colorFloat">
              &#8377;
              {this.totalAmount(this.state.products)}
            </strong>
          </h3>
          <p>
            Refundable deposit{" "}
            <div style={{ float: "right" }}>
              &#8377; {this.state.products.refund}
            </div>
          </p>
        </div>
        <br />
        <Button className="themeColor" block>
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
          <CheckoutSteps step={0} />
          <Col span={12}>
            <div style={{ fontSize: "14px" }}>
              <strong>My cart - </strong>1 items
            </div>
            <div style={{ fontSize: "14px" }}>
              Total rent: <strong>&#8377; {this.state.products.rent} </strong>
            </div>
          </Col>
          <Col span={12}>
            <Link to="" className="AddMoreproducts">
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
      <Row className="cartitem">
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
              <h3 className="productname">{this.props.products.name}</h3>
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
        <div className="listcloseicons">
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
