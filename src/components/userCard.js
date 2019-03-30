import React, { Component } from "react";
import "../App.css";
import { Row, Col, Rate } from "antd";
import Button from "../ui-antd/components/Button";
import Card from "../ui-antd/components/Card";
import Avatar from "../ui-antd/components/Avatar";

class UserCard extends Component {
  render() {
    let seller = this.props.seller;
    return (
      <Card className="userCard">
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
              <h5 style={{ color: "#23b195", fontSize: "10px" }}>
                {" "}
                <Rate
                  disabled
                  defaultValue={seller.rating}
                  style={{ color: "#23b195", fontSize: "10px" }}
                />
                <br />
                Read Reviews ({seller.reviewsCount})
              </h5>
            </h4>
          </Col>
          <Col span={8}>
            <Button
              style={{
                color: "#23b195",
                border: "#23b195 0.5px solid",
                float: "right"
              }}
              ghost
            >
              Follow
            </Button>
          </Col>
        </Row>
        <br />
        <h4
          style={{
            fontSize: "14px"
          }}
        >
          About
        </h4>
        <p
          style={{
            fontSize: "12px"
          }}
        >
          {seller.About}
        </p>
        <h4
          style={{
            fontSize: "14px"
          }}
        >
          Web references
        </h4>
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
            color: "#23b195",
            border: "#23b195 0.5px solid",
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
