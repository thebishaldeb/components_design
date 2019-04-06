import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Form, Input, Divider, Row, Col, Card, Button } from "antd";
import naruto2 from "../resources/naruto2.jpg";

class SignIn extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            color: "#4a4a4a",
            fontSize: "11px",
            letterSpacing: "0.8px",
            paddingBottom: "10px"
          }}
        >
          Let me help you sign in
        </p>
        <Form
          style={{
            paddingBottom: 0,
            marginBottom: 0
          }}
        >
          <Form.Item>
            <Input type="email" placeholder="Email Address" />
          </Form.Item>
          <Form.Item style={{ paddingBottom: 0, marginBottom: 0 }}>
            <Input type="password" placeholder="Password" />
            <Link
              style={{
                color: "#23b195",
                fontSize: "11px",
                letterSpacing: "0.8px",
                float: "right"
              }}
              to="/"
            >
              Forgot password?
            </Link>
            <Button
              style={{
                background: "#23b195",
                color: "white",
                marginTop: "10px"
              }}
              block
            >
              Sign In
            </Button>
            <p
              style={{
                color: "#4a4a4a",
                fontSize: "11px",
                textAlign: "center",
                letterSpacing: "0.8px",
                paddingBottom: 0,
                marginBottom: 0
              }}
            >
              New to LensHood?{" "}
              <span
                onClick={e => this.props.setModal1Visible("signup")}
                style={{ color: "#23b195", cursor: "pointer" }}
              >
                Sign Up
              </span>
            </p>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
class SignUp extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            color: "#4a4a4a",
            fontSize: "11px",
            letterSpacing: "0.8px",
            paddingBottom: "10px"
          }}
        >
          Let me help you sign up
        </p>
        <Form
          style={{
            paddingBottom: 0,
            marginBottom: 0
          }}
        >
          <Form.Item>
            <Input type="text" placeholder="Your Name" />
          </Form.Item>
          <Form.Item>
            <Input type="email" placeholder="Email Address" />
          </Form.Item>
          <Form.Item>
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            style={{
              paddingBottom: 0,
              marginBottom: 0
            }}
          >
            <Button
              style={{
                background: "#23b195",
                color: "white"
              }}
              block
            >
              Sign Up
            </Button>
            <p
              style={{
                color: "#4a4a4a",
                fontSize: "11px",
                textAlign: "center",
                letterSpacing: "0.8px",
                paddingBottom: 0,
                marginBottom: 0
              }}
            >
              Already have an account?{" "}
              <span
                onClick={e => this.props.setModal1Visible("signin")}
                style={{ color: "#23b195", cursor: "pointer" }}
              >
                Sign In
              </span>
            </p>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default class SignInAndSignUpCard extends Component {
  state = {
    SignInState: "signin"
  };

  setModal1Visible(val) {
    this.setState({ SignInState: val });
  }
  
  render() {
    return (
      <div>
        <Row padding="0">
          <Col span={8}>
            <img
              src={naruto2} alt=""
              width={"100%"}
              style={
                this.state.SignInState === "signin"
                  ? { height: "463px" }
                  : { height: "504px" }
              }
            />
          </Col>
          <Col span={16}>
            <Card style={{ padding: "0 10px 0 25px" }}>
              <h2
                style={{
                  paddingBottom: "4px",
                  fonWweight: 900,
                  letterSpacing: "0.4px",
                  textShadow: "1px 0 0"
                }}
              >
                {this.state.SignInState === "signin"
                  ? "Sign in to Lenshood"
                  : "Create Account"}
              </h2>
              <Row gutter={16}>
                <Col span={12}>
                  <Button
                    style={{
                      background: "#3c60a2",
                      color: "white"
                    }}
                    block
                  >
                    Facebook
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    style={{
                      background: "#c55643",
                      color: "white"
                    }}
                    block
                  >
                    Google
                  </Button>
                </Col>
              </Row>
              <Divider
                style={{
                  color: "#999",
                  fontSize: "10px",
                  padding: "15px 50px 5px 50px"
                }}
              >
                or via E-mail
              </Divider>
              {this.state.SignInState === "signin" ? (
                <SignIn setModal1Visible={this.setModal1Visible.bind(this)} />
              ) : (
                <SignUp setModal1Visible={this.setModal1Visible.bind(this)} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
