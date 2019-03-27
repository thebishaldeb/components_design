import React, { Component } from "react";
import "../App.css";
import { Row, Col, Rate } from "antd";
import Button from "../ui-antd/components/Button";
import Card from "../ui-antd/components/Card";
import Avatar from "../ui-antd/components/Avatar";

class UserCard extends Component {
  render() {
    let seller = this.props.seller;
    console.log(seller);
    return (
      <Card style={{ textAlign: "justify", margin: "20px 0",boxShadow: "0 0 8px 4px rgba(49, 196, 167, 0.04)" }}>
        <Row>
          <Col span={4}>
            <Avatar />
          </Col>
          <Col span={12}>
            <h4
              style={{
                fontSize: "14px",
                lineHeight: "15px",
                marginLeft: "5px"
              }}
            >
              {seller.name}
              <br />
              <h5 style={{ color: "#219653", fontSize: "10px" }}>
                {" "}
                <Rate
                  disabled
                  defaultValue={seller.rating}
                  style={{ color: "#219653", fontSize: "10px" }}
                />
                <br />
                Read Reviews ({seller.reviewsCount})
              </h5>
            </h4>
          </Col>
          <Col span={8}>
            <Button
              style={{
                color: "#219653",
                border: "#219653 0.5px solid",
                float: "right"
              }}
              ghost
            >
              Follow
            </Button>
          </Col>
        </Row>
        <br/>
        <h4 style={{
                fontSize: "14px"
              }}>About</h4>
        <p style={{
                fontSize: "12px"
              }}>{seller.About}</p>
        <h4 style={{
                fontSize: "14px"
              }}>Web references</h4>
        <strong>
          {seller.references.map(item => (
            <strong>
              <a href={item} style={{ color: "black", fontSize: "12px" }}>
                {item}
                <br />
              </a>
            </strong>
          ))}
        </strong>
        <br />
        <Button
          color="primary"
          style={{
            color: "#219653",
            border: "#219653 0.5px solid",
            margin: "0 30%",
            width: "40%"
          }}
          ghost
        >
          Contact
        </Button>
      </Card>
    );
  }
}

export default UserCard;
