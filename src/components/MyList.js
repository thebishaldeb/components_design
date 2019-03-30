import React, { Component } from "react";
import "../App.css";
import { Layout, Icon, Button, Row, Col } from "antd";
const ButtonGroup = Button.Group;
const { Content } = Layout;

class MyListingProducts extends Component {
  state = {
    value: "On Rent"
  };
  classNamesgroup(e){
    if(this.state.value === e){
      return "btnActive"
    }
    else {
      return "btn"
    }
  }
  FilterItems(e){
    this.setState({value: e})
  }
  returnItem(item) {
    return (
      <Row
        style={{
          margin: "20px",
          marginBottom: "30px",
          border: "1px solid #ddd"
        }}
      >
        <Col span={8}>
          <img
            style={{
              height: "150px",
              width: "100%",
              paddingRight: "20px"
            }}
            src={item.image}
          />
        </Col>
        <Col span={16} style={{ paddingTop: "10px" }}>
          {item.nature === "On Rent" ? (
            <h6
              style={{
                color: "white",
                padding: "1px 5px",
                float: "right",
                marginRight: "12px",
                background: "#e3c41c"
              }}
            >
              On Rent
            </h6>
          ) : (
            <h6
              style={{
                color: "white",
                padding: "1px 5px",
                float: "right",
                marginRight: "12px",
                background: "#e3951c"
              }}
            >
              On Shelf
            </h6>
          )}
          <h4>{item.name}</h4>
          <h6>
            <span
              style={{
                background: "#23b195",
                color: "white",
                padding: "1px"
              }}
            >
              {item.rating} <Icon type="star" theme="filled" />
            </span>
            <span style={{ color: "#23b195" }}> ({item.reviews})</span>
          </h6>
          <h5 style={{ marginBottom: "25px" }}>
            <strong>&#8377; {item.rent} per day</strong>
          </h5>
          <Button
            style={{
              background: "#23b195",
              color: "white",
              width: "40%",
              margin: "0 2.5%"
            }}
          >
            View Listing
          </Button>
          <Button
            style={{
              background: "#23b195",
              color: "white",
              width: "40%",
              margin: "0 2.5%"
            }}
          >
            Remove Listing
          </Button>
        </Col>
      </Row>
    );
  }
  renderItem(item) {
    console.log(item.nature, this.state.value)
    if (item.nature === this.state.value) {
      return this.returnItem(item);
    }
  }
  render() {
    return (
      <Content style={{ padding: "0 30px 0 30px", minHeight: 280 }}>
        <Row style={{ margin: "15px" }}>
          <Col md={10} xs={8}>
            <h2 style={{ fontSize: "23px", fontWeight: "bold" }}>
              My Listings
            </h2>
            <br />
          </Col>
          <Col md={14} xs={16}>
            <ButtonGroup style={{ width: "100%" }}>
              <Button
              onClick={(e)=> this.FilterItems("all")}
                className={this.classNamesgroup("all")}
              >
                All
              </Button>
              <Button
              onClick={(e)=> this.FilterItems("On Shelf")}
                className={this.classNamesgroup("On Shelf")}
              >
                On Shelf
              </Button>
              <Button
              onClick={(e)=> this.FilterItems("On Rent")}
                className={this.classNamesgroup("On Rent")}
              >
                On Rent
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        {this.props.products? 
        this.props.products.map(item =>
          this.state.value === "all"
            ? this.returnItem(item)
            : this.renderItem(item)
        ): null}
      </Content>
    );
  }
}

export default MyListingProducts;
