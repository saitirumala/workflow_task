import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import earning_logo from "./assets/img/earning-logo.PNG";
import product_logo from "./assets/img/product-logo.PNG";
import message_logo from "./assets/img/message-logo.PNG";
import vendor_logo from "./assets/img/vendor-logo.PNG";
class Dashboard extends Component {
  render() {
    return (
      <Card
        border="light"
        style={{
          margin: "0px 10px 10px 210px",
          height: "100%",
          minHeight: "530px",
          backgroundColor: "#f4f5f7",
        }}
      >
        <Card.Body>
          <Card.Title>Dashboard</Card.Title>
          <Container style={{ marginTop: "50px" }}>
            <Row>
              <Col className="col-class" style={{ backgroundColor: "#ffbc58" }}>
                <p>
                  {" "}
                  <img
                    src={earning_logo}
                    style={{
                      width: "40px",
                      marginBottom: "10px",
                      marginRight: "25px",
                    }}
                  />{" "}
                  Earnings <span>$ 6677</span>
                </p>
              </Col>
              <Col className="col-class" style={{ backgroundColor: "#ff8084" }}>
                <p>
                  {" "}
                  <img
                    src={message_logo}
                    style={{
                      width: "40px",
                      marginBottom: "10px",
                      marginRight: "25px",
                    }}
                  />{" "}
                  Products <span>$ 6677</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="col-class" style={{ backgroundColor: "#13c9ca" }}>
                <p>
                  {" "}
                  <img
                    src={product_logo}
                    style={{
                      width: "40px",
                      marginBottom: "10px",
                      marginRight: "25px",
                    }}
                  />{" "}
                  Messages <span>$ 6677</span>
                </p>
              </Col>
              <Col className="col-class" style={{ backgroundColor: "#a5a5a5" }}>
                <p>
                  {" "}
                  <img
                    src={vendor_logo}
                    style={{
                      width: "40px",
                      marginBottom: "10px",
                      marginRight: "25px",
                    }}
                  />{" "}
                  New vendors <span>$ 6677</span>
                </p>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default Dashboard;
