import React, { Component } from "react";
import "./App.css";
import {
  Row,
  Col,
  Icon,
  DatePicker,
  Checkbox,
  Rate,
  Slider,
  Carousel
} from "antd";
import Button from "./ui-antd/components/Button";
import Card from "./ui-antd/components/Card";
import UserCard from "./components/userCard";
import ProductCard from "./components/ProductCard";
const { RangePicker } = DatePicker;
class App extends Component {
  state = {
    product: {
      title: "Heading of the product",
      replacementValue: 70000,
      Specification: ["Blah Blah Blah", "Bleh", "Same stuffs"],
      description:
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content. The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get",
      package: [
        "Blah Blah Blah",
        "Bleh",
        "Same stuffs",
        "Blah Blah Blah",
        "Bleh",
        "Same stuffs",
        "Blah Blah Blah",
        "Bleh",
        "Same stuffs"
      ],
      cancellationPolicy:
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when",
      damagePolicy:
        "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when",
      rentPerDay: 200,
      rentPerWeek: 1000,
      serviceFee: 100,
      noOfDays: 0,
      refundableDeposit: 5000,
      seller: {
        name: "Rajeev Khanna",
        About:
          "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when",
        references: ["google.com", "facebook.com", "instagram.com"],
        rating: 4,
        reviewsCount: 12
      }
    },
    inputValue: 1
  };

  onChange = value => {
    this.setState({
      inputValue: value,
      noOfDays: value
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <div>
          Home > DSLR cameras > Popular Products > Canon EOS 70D (Rajeev Khanna)
        </div>
        <h1 style={{ backgroundColor: "#23b195", opacity: "0.2", padding:"10px 20px", fontSize:"25px" }}>
         {this.state.product.title}
        </h1>
        <div className="container">
          <Row>
            <Col lg={16} md={13} sm={24}>
              <ProductCard product={this.state.product} />
              <h3>8 reviews on this item</h3>
            </Col>
            <Col lg={8} md={11} sm={24}>
              <Card style={{ textAlign: "center" }}>
                <h3>Select your rental period</h3>
                <h5>
                  Price per day <h4>&#8377; {this.state.product.rentPerDay}</h4>
                </h5>
                <h5>
                  -25% discount<h5>{this.state.product.noOfDays} days</h5>
                </h5>
                <Slider
                  min={1}
                  max={30}
                  onChange={this.onChange}
                  value={typeof inputValue === "number" ? inputValue : 0}
                />
                <div>
                  <h5 style={{ float: "left" }}>1 day</h5>
                  <h5 style={{ float: "right" }}>30 days</h5>
                </div>
              </Card>
              <Card className="CheckoutList">
                <Row>
                  <Col span={12}>
                    &#8377; {this.state.product.rentPerDay} <h5>per day</h5>
                  </Col>
                  <Col span={12}>
                    &#8377; {this.state.product.rentPerWeek} <h5>per week</h5>
                  </Col>
                </Row>
                <hr />
                <p>
                  Owner Delivery <Icon type="car" />
                  <Checkbox.Group style={{ float: "right" }}>
                    <Checkbox value="Owner Delivery" />
                  </Checkbox.Group>
                </p>
                <h5>Benefits you gain the most out of your service</h5>
                <hr />
                <strong>Dates</strong>
                <div>
                  <RangePicker
                    dateRender={current => {
                      const style = {};
                      if (current.date() === 1) {
                        style.border = "1px solid #1890ff";
                        style.borderRadius = "50%";
                      }
                      return (
                        <div className="ant-calendar-date" style={style}>
                          {current.date()}
                        </div>
                      );
                    }}
                  />
                </div>
                <h5>Pick up and return days are free</h5>
                <div>
                  <p>
                    Rent per day{" "}
                    <div style={{ float: "right" }}>
                      &#8377; {this.state.product.rentPerDay}
                    </div>
                  </p>
                  <p>
                    Service fee{" "}
                    <div style={{ float: "right" }}>
                      &#8377; {this.state.product.serviceFee}
                    </div>
                  </p>
                  <p>
                    &#8377; {this.state.product.rentPerDay}/-{" "}
                    <Icon type="close" /> {this.state.product.noOfDays} days{" "}
                    <div style={{ float: "right" }}>
                      &#8377;{" "}
                      {this.state.product.rentPerDay *
                        this.state.product.noOfDays}
                    </div>
                  </p>
                  <p>
                    25% Multi day discount{" "}
                    <div style={{ float: "right", color: "#23b195" }}>
                      -&#8377; 400
                    </div>
                  </p>
                </div>
                <hr />
                <h3>
                  Total rent amount{" "}
                  <strong style={{ float: "right", color: "#23b195" }}>
                    &#8377; 1300
                  </strong>
                </h3>
                <p>
                  Refundable deposit{" "}
                  <div style={{ float: "right" }}>
                    &#8377; {this.state.product.refundableDeposit}
                  </div>
                </p>
                <Button color="primary" className="goToCheckout">
                  BOOK NOW
                </Button>
                <Button color="primary" className="goToCheckout">
                  ADD TO BAG <Icon type="shopping" />
                </Button>
              </Card>
              <UserCard seller={this.state.product.seller} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
