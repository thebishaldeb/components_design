import React, { Component } from "react";
import "./App.css";
import { Layout, Row, Col } from "antd";
import MyList from "./components/MyList";
import AccDetailsMenu from "./components/AccDetailsMenu";

class MyListings extends Component {
  state = {
    products: [
      {
        name: "Blah blah bleh",
        rent: 1200,
        image:
          "https://free4kwallpapers.com/uploads/wallpaper-cache/naruto-anime-4k-wallpaper-1024x768-MM-100.jpg",
        rating: 4,
        reviews: 7,
        nature: "On Rent"
      },
      {
        name: "Blah lah bleh",
        rent: 120,
        image:
          "https://free4kwallpapers.com/uploads/wallpaper-cache/naruto-shippuden-1920x1080-1024x768-MM-100.jpg",
        rating: 3.7,
        reviews: 12,
        nature: "On Shelf"
      },
      {
        name: "Blah lah bleh",
        rent: 120,
        image:
          "https://free4kwallpapers.com/uploads/wallpaper-cache/naruto-kyuubi-mode-3-1024x768-MM-100.jpg",
        rating: 3.9,
        reviews: 25,
        nature: "On Rent"
      }
    ]
  };
  render() {
    return( 
      <div style={{ padding: "20px" }}>
        <h4 style={{ padding: "10px 20px" }}>Account > My listing</h4>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Row>
            <Col lg={7} md={24}>
              <AccDetailsMenu />
            </Col>
            <Col lg={15} md={24}>
             <MyList products={this.state.products}/>
             </Col>
          </Row>
        </Layout>
      </div>
    );
  }
}

export default MyListings;
