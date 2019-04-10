import React from "react";
import "../App.css";
import { Row, Col, Icon, Button } from "antd";
import CheckoutSteps from "../components/CheckoutSteps";
import OrderCard from "../components/OrderCard";
import naruto2 from "../resources/naruto2.jpg";

export default class CheckoutPay extends React.Component {
  state = {
    product: {
      name:
        "Canon EOS 70D DSLR Camera Bundle with Canon EF-S 18-55mm f/3.5- 5.6 IS ",
      image: naruto2,
      days: 4,
      date: {
        start: "04 Jan'19",
        end: "07 Jan'19"
      },
      refund: 5000,
      totalRent: 1300
    },
    address: {
      name: "Ankit Jain",
      address1: "Room A308, Manas Hostel, IITG",
      address2: "Guwahati, North Guwahati",
      state: "Assam",
      PIN: "7810390",
      mobile: "+91-9085626859"
    }
  };

  render() {
    return (
      <div style={{ padding: "20px 8%" }}>
        <Row gutter={32}>
          <CheckoutSteps step={1} />
          <Col span={24}>
            <h3
              className="billingAddress"
            >
              Billing Address
            </h3>
            <br />
          </Col>
          <Col lg={14} sm={24}>
            <Row gutter={32}>
              <Col
                xs={{ span: 18, offset: 3 }}
                sm={{ span: 12, offset: 0 }}
                md={{ span: 10, offset: 0 }}
                style={{ paddingBottom: "30px" }}
              >
                <div
                  className="HomeAddress"
                >
                  <div
                    className="HomeAddressBlock"
                  >
                    Home Address{" "}
                    <Icon
                      type="home"
                      style={{ float: "right", color: "#5d5f5f" }}
                    />
                  </div>
                  <br />
                  <h4 className="addressLines">
                    {this.state.address.name},
                  </h4>
                  <h4 className="addressLines">
                    {this.state.address.address1},
                  </h4>
                  <h4 className="addressLines">
                    {this.state.address.address2},
                  </h4>
                  <h4 className="addressLines">
                    {this.state.address.state}.
                  </h4>
                  <h4 className="addressLines">
                    {this.state.address.PIN}
                  </h4>
                  <h4 className="addressLines">
                    Mobile: {this.state.address.mobile}
                  </h4>
                  <div style={{ float: "right" }}>
                    <Button
                      style={{
                        padding: "0 15px"
                      }}
                      className="addressIcons"
                      ghost
                    >
                      <Icon type="edit" />
                    </Button>
                    <Button
                      style={{
                        padding: 0
                      }}
                      className="addressIcons"
                      ghost
                    >
                      <Icon type="delete" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 14, offset: 5 }}
                sm={{ span: 10, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                style={{ paddingBottom: "30px" }}
              >
                <div
                  className="AddNewAddressBlock"
                  //   onClick={}
                >
                  <div
                    className="AddNewAddress"
                  >
                    <Icon type="plus" />
                  </div>
                  <h5>Add a new address</h5>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            lg={{ span: 8, offset: 0 }}
            sm={{ span: 18, offset: 3 }}
            xs={{ span: 22, offset: 1 }}
          >
            <OrderCard
              product={this.state.product}
              paid={false}
              buttonText={"Continue"}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
