import React, { Component } from "react";
import "../App.css";
import { Card, Rate, Icon } from "antd";
import Avatar from "../ui-antd/components/Avatar";
const { Meta } = Card;

class RelatedCard extends Component {
  render() {
    let list = this.props.relatedlist;
    return (
      <Card hoverable cover={<img alt="" src={list.image} />}>
        <Meta
          title={list.name.substring(0, 20)}
          description={<h5>&#8377;{list.rent} per day</h5>}
        />
        <Meta
          style={{ marginTop: "20px", padding:"0" }}
          avatar={<Avatar/>}
          title={
            <h4
              style={{
                fontSize: "10px",
                lineHeight: "15px",
                margin: "5px 0"
              }}
            >
              {list.seller}
              <br />
              <Rate
                disabled
                defaultValue={list.rating}
                style={{ color: "#219653", fontSize: "6px" }}
              />
              <div
                style={{ 
                  position:"absolute",
                  right: "5px",
                  bottom: "40px",
                  float: "right", color: "#219653", fontSize: "12px" }}
              >
                <Icon
                  type="car"
                  theme="filled"
                  style={{ marginRight: "10px" }}
                />
                <Icon type="safety-certificate" theme="filled" />
              </div>
            </h4>
          }
        />
      </Card>
    );
  }
}

export default RelatedCard;
