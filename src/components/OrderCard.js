import React from "react";
import "../App.css";
import { Row, Col, Button, Card } from "antd";

export default class OrderCard extends React.Component {
  render() {
    return (
      <Card>
        <h3 style={{ textShadow: "0.5px 0 0", fontSize: "17px" }}>
          Order Status
        </h3>
        <Row>
          <Col span={9}>
            <img
              src={this.props.product.image}
              alt=""
              style={{
                width: "100%",
                paddingRight: "15px",
                height: "60px"
              }}
            />
          </Col>
          <Col span={13}>
            <h4
              style={{
                fontSize: "13px",
                lineHeight: "14px",
                color: "#4a4a4a",
                letterSpacing: "0.1px",
                textAlign: "justify"
              }}
            >
              {this.props.product.name}
            </h4>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={20}>
            <h5
              style={{
                fontSize: "11px",
                color: "#4a4a4a",
                letterSpacing: "1px"
              }}
            >
              Rental Period <br />
              <strong>
                {this.props.product.date.start}-{this.props.product.date.end}
              </strong>
            </h5>
          </Col>
          <Col span={4}>
            <h5
              style={{
                fontSize: "11px",
                color: "#4a4a4a",
                letterSpacing: "1px",
                float: "right"
              }}
            >
              <strong>
                Days <br />
                {this.props.product.days}
              </strong>
            </h5>
          </Col>
        </Row>
        <br />
        <h3 style={{ fontSize: "17px", textShadow: "0.3px 0 0" }}>
          Cart Summary
        </h3>
        <h5
          style={{
            fontSize: "11px",
            color: "#4a4a4a",
            letterSpacing: "1px"
          }}
        >
          Total rent amount{" "}
          <strong style={{ float: "right" }}>
            &#8377;
            {this.props.product.totalRent}
          </strong>
        </h5>
        <h5
          style={{
            fontSize: "11px",
            color: "#4a4a4a",
            letterSpacing: "1px"
          }}
        >
          Refundable deposit{" "}
          <strong style={{ float: "right" }}>
            &#8377; {this.props.product.refund}
          </strong>
        </h5>
        {this.props.paid === true ? (
          <h5
            style={{
              fontSize: "11px",
              color: "#4a4a4a",
              letterSpacing: "1px"
            }}
          >
            You paid{" "}
            <strong style={{ float: "right", color: "#23b195" }}>
              &#8377; {this.props.product.youPaid.amount}
            </strong>
            <h6 style={{ color: "#676767" }}>
              {this.props.product.youPaid.method}
            </h6>
          </h5>
        ) : null}
        <br />
        <Button
          style={{
            background: "#23b195",
            color: "#fff",
            borderRadius: "4px"
          }}
          block
        >
          {this.props.buttonText}
        </Button>
      </Card>
    );
  }
}
