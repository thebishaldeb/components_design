import React, { Component } from "react";
import "./App.css";
import { Layout, Row, Col, Breadcrumb } from "antd";
import MyList from "./components/MyList";
import AccDetailsMenu from "./components/AccDetailsMenu";
import DetailsCard from "./components/DetailsCard";

class MyListDetails extends Component {
  state = {
    product:
      {
        name: "Blah blah bleh",
        rent: 1200,
        image:
          "https://free4kwallpapers.com/uploads/wallpaper-cache/naruto-anime-4k-wallpaper-1024x768-MM-100.jpg",
        rating: 4,
        reviews: 7,
        nature: "On Rent"
      }
  };
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Account</Breadcrumb.Item>
          <Breadcrumb.Item href=""> My listing</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Row>
            <Col lg={7} md={24} >
              <AccDetailsMenu select={3} />
            </Col>
            <Col lg={13} md={24}>
              <DetailsCard item={this.state.product} />
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }
}

export default MyListDetails;
