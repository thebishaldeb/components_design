import React, { Component } from "react";
import "../App.css";
import { Row, Col, Icon, DatePicker, Checkbox, Slider } from "antd";
import Button from "../ui-antd/components/Button";
import Card from "../ui-antd/components/Card";

const { RangePicker } = DatePicker;
export default class AddToCartCard extends Component {
  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <Card style={{ textAlign: "center" }}>
          <h3>Select your rental period</h3>
          <h5>
            Price per day <h4>&#8377; {this.props.product.rentPerDay}</h4>
          </h5>
          <h5>
            -25% discount<h5>{this.props.noOfDays} days</h5>
          </h5>
          <Slider
            min={1}
            max={30}
            onChange={this.props.onChange}
            value={
              typeof this.props.noOfDays === "number" ? this.props.noOfDays : 0
            }
          />
          <div>
            <h5 style={{ float: "left" }}>1 day</h5>
            <h5 style={{ float: "right" }}>30 days</h5>
          </div>
        </Card>
        <Card>
          <Row style={{ textAlign: "center" }}>
            <Col span={12}>
              &#8377; {this.props.product.rentPerDay} <h5>per day</h5>
            </Col>
            <Col span={12}>
              &#8377; {this.props.product.rentPerWeek} <h5>per week</h5>
            </Col>
          </Row>
          <hr />
          <p>
            Owner Delivery <Icon type="car" />
            <Checkbox.Group style={{ float: "right" }}>
              <Checkbox value="Owner Delivery" />
            </Checkbox.Group>
            <h5>Benefits you gain the most out of your service</h5>
          </p>

          <hr style={{ border: "#ddd 1px solid", margin: "20px 0" }} />
          <strong>Dates</strong>
          <div>
            <RangePicker
              dateRender={current => {
                const style = {};
                if (current.date() === 1) {
                  style.border = "1px solid #23b195";
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
          <br />
          <div>
            <p>
              Rent per day{" "}
              <div style={{ float: "right" }}>
                &#8377; {this.props.product.rentPerDay}
              </div>
            </p>
            <p>
              Service fee{" "}
              <div style={{ float: "right" }}>
                &#8377; {this.props.product.serviceFee}
              </div>
            </p>
            <p>
              &#8377; {this.props.product.rentPerDay}/- <Icon type="close" />{" "}
              {this.props.noOfDays} days{" "}
              <div style={{ float: "right" }}>
                &#8377; {this.props.product.rentPerDay * this.props.noOfDays}
              </div>
            </p>
            <p>
              25% Multi day discount{" "}
              <div style={{ float: "right", color: "#23b195" }}>
                -&#8377;{" "}
                {this.props.product.rentPerDay * this.props.noOfDays * 0.25}
              </div>
            </p>
          </div>
          <hr />
          <h3>
            Total rent amount{" "}
            <strong style={{ float: "right", color: "#23b195" }}>
              &#8377;{" "}
              {this.props.product.rentPerDay * this.props.noOfDays -
                this.props.product.rentPerDay * this.props.noOfDays * 0.25 +
                this.props.product.serviceFee}
            </strong>
          </h3>
          <p>
            Refundable deposit{" "}
            <div style={{ float: "right" }}>
              &#8377; {this.props.product.refundableDeposit}
            </div>
          </p>
          <Button
            style={{
              color: "white",
              background: "#23b195",
              marginBottom: "10px"
            }}
            block
          >
            BOOK NOW
          </Button>
          <Button
            style={{ color: "#23b195", border: "#23b195 0.5px solid" }}
            block
          >
            ADD TO BAG <Icon type="shopping" />
          </Button>
        </Card>
      </div>
    );
  }
}
