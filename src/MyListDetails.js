import React, { Component } from "react";
import "./App.css";
import { Layout, Row, Col, Breadcrumb, Calendar, Card, Icon } from "antd";
import AccDetailsMenu from "./components/AccDetailsMenu";
import Avatar from "./ui-antd/components/Avatar";
import DetailsCard from "./components/DetailsCard";
import ReviewsCard from "./components/ReviewsCard";
class MyListDetails extends Component {
  state = {
    product: {
      name: "Blah blah bleh",
      rent: 1200,
      image:
        "https://free4kwallpapers.com/uploads/wallpaper-cache/naruto-anime-4k-wallpaper-1024x768-MM-100.jpg",
      rating: 4,
      reviews: 7,
      nature: "On Rent"
    },
    reviews: {
      properties: {
        "image quality": 5.0,
        "Auto focus and lighting": 3.7,
        Performance: 4.0,
        Features: 5.0,
        Design: 4.0
      },
      reviewers: [
        {
          name: "Sree Bhargav",
          Date: "18th Aug 2018",
          word:
            "Really an awesome experience with this DSLR. Photo quality is too good. Zoom capability is also awesome, especially at 250mm. Wifi function along with canon app in android simply makes the product must to buy."
        },
        {
          name: "Ankit Jain",
          Date: "18th Dec 2018",
          word:
            "Really an awesome experience with this DSLR. Photo quality is too good"
        }
      ]
    },
    bookings: [
      {
        name: "Rajeev Khanna",
        rating: 4
      },
      {
        name: "BIshal Deb",
        rating: 3.7
      },
      {
        name: "Mukesh Babu",
        rating: 2.2
      },
      {
        name: "Rajeev Khanna",
        rating: 4
      },
    ]
  };
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Account</Breadcrumb.Item>
          <Breadcrumb.Item href=""> My listing</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <Row style={{ padding: "0 5%" }}>
            <Col lg={7} md={24}>
              <AccDetailsMenu select={3} />
            </Col>
            <Col lg={15} md={24}>
                <DetailsCard buttonText="Edit" item={this.state.product} />
              <Card>
                <Row>
                  <h3>Product Calender</h3>
                  <br />
                  <Col sm={13} style={{paddingRight: "15px",borderRight:"1px #eee solid"}}>
                    <Calendar fullscreen={false}/>
                  </Col>
                  <Col sm={11}  style={{paddingLeft: "15px"}}>
                    <h3 style={{ fontWeight:600, paddingBottom: 0}}>Bookings</h3>
                    <Card style={{ border: 0, padding: "2px !important" }}>
                      {this.state.bookings.map(item => (
                        <div>
                          <div>
                            <Avatar />
                            <h4
                              style={{
                                marginLeft: "10px",
                                display: "inline-block"
                              }}
                            >
                              {item.name}
                            </h4>
                          </div>
                          <Col span={24} style={{ paddingBottom:"5px", borderBottom:"1px #eee solid",marginBottom:"15px"}}>
                            <h5 style={{ margin: "10px 3px" }}>
                              <span
                                style={{
                                  background: "#23b195",
                                  color: "white",
                                  padding: "0px 6px 1px 7px"
                                }}
                              >
                                {item.rating}{" "}
                                <Icon type="star" theme="filled" />
                              </span>
                              <span
                                style={{ color: "#23b195", padding: "0 14px" }}
                              >
                                Cancel Booking
                              </span>
                            </h5>
                          </Col>
                        </div>
                      ))}
                    </Card>
                  </Col>
                </Row>
              </Card>
              <ReviewsCard reviews={this.state.reviews} />
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }
}

export default MyListDetails;
