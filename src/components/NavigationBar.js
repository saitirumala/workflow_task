import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
import search_logo from "../assets/img/search_logo.PNG";

const Styles = styled.div`
  .navbar {
    background-color: #fcfcfc;
    height: 65px;
  }
  .navbar {
    left: 15.9%;
    width: 84%;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 0%;
    right: 25%;
  }
  .searchfield {
    display: inline;
    width: 70%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form className="form-center">
        <img
          src={search_logo}
          style={{ width: "30px", margin: "5px 0px 5px 8px" }}
        />{" "}
        <span style={{ color: "#655f5f" }}>Search</span>{" "}
        <FormControl type="text" className="searchfield" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"></Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
