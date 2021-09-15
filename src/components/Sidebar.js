import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import workflow_logo from "../assets/img/workflow-logo.PNG";
const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 200px; /* Set the width of the sidebar */
  z-index: 1; /* Stay on top of everything */
  top: 0; /* Stay at the top */
  background-color: #43379d; /* Blue */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path: "/" /* path is used as id to check which NavItem is active basically */,
          name: "Dashboard",
          css: "fa fa-fw fa-dashboard",
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
        },
        {
          path: "/team",
          name: "Team",
          css: "fa fa-fw fa-clock",
          key: 2,
        },
        {
          path: "",
          name: "Projects",
          css: "fas fa-hashtag",
          key: 3,
        },
        {
          path: "",
          name: "Calendar",
          css: "fas fa-calendar",
          key: 4,
        },
        {
          path: "",
          name: "Documents",
          css: "fas fa-document",
          key: 5,
        },
        {
          path: "",
          name: "Reports",
          css: "fas fa-report",
          key: 6,
        },
      ],
    };
  }

  onItemClick = (path) => {
    console.log("path :>> ", path);
    if (path != "") {
      this.props.history.push(path);
      this.setState({ activePath: path });
    }
  };

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        <h3 style={{ color: "white", fontFamily: "sans-serif" }}>
          {" "}
          <img
            src={workflow_logo}
            style={{ width: "40px", marginBottom: "10px" }}
          />{" "}
          Workflow
        </h3>
        {items.map((item) => {
          return (
            <NavItem
              path={item.path}
              name={item.name}
              css={item.css}
              onItemClick={this.onItemClick}
              active={item.path === activePath}
              key={item.key}
            />
          );
        })}
      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
  height: 40px;
  cursor: pointer;
  width: 200px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0; /* Puts space between NavItems */
  p {
    font-size: 16px;
    font-family: sans-serif;
    color: ${(props) => (props.active ? "white" : "white")};
    background-color: ${(props) => (props.active ? "black" : "")};
    border-radius: ${(props) => (props.active ? "7px" : "7px")};
    opacity: ${(props) => (props.active ? 0.7 : "")};
    padding: 8px;
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
      background-color: #585c63;
    }
  }
`;

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    console.log("active :>> ", active);
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css}>
          <p onClick={this.handleClick}> {this.props.name}</p>
        </Link>
      </StyledNavItem>
    );
  }
}

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
