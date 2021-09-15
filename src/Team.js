import React, { Component } from "react";
import {
  Card,
  Container,
  Table,
  Form,
  Button,
  Row,
  Col,
  FormGroup,
} from "react-bootstrap";
class Team extends Component {
  state = {
    projectdata: [
      { name: "zoomcar", status: "completed" },
      { name: "ola", status: "completed" },
      { name: "rapido", status: "production" },
    ],
    check_completd: false,
    tempdata: [],
    searchproject: "",
  };
  removerow = (index) => {
    this.setState({
      projectdata: this.state.projectdata.splice(index, 1),
    });
    this.setState({
      projectdata: this.state.projectdata,
    });
  };
  checkCompletd = (e, name) => {
    this.setState({ [name]: e.target.checked });
    this.setState({
      tempdata: this.state.projectdata,
    });
    if (e.target.checked === true) {
      this.setState({
        projectdata: this.state.projectdata.filter(
          (f) => f.status === "completed"
        ),
      });
    } else {
      this.setState({
        projectdata: this.state.tempdata,
      });
    }
  };
  onchange = (e, name) => {
    this.setState({ [name]: e.target.value });
  };
  searchfield = (e) => {
    let name = e.target.name,
      value = e.target.value;
    this.setState({ [name]: value });
    const { searchproject } = this.state;
    const lowercasedFilter = searchproject.toLowerCase();
    const filteredData = this.state.projectdata.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    this.setState({
      projectdata: filteredData,
    });
  };
  submitform = (event, field, value) => {
    event.preventDefault();
    this.setState({
      projectdata: this.state.projectdata.push({
        name: this.state.projectname,
        status: "completed",
      }),
    });
    this.setState({ projectdata: this.state.projectdata });
  };

  render() {
    const compltedprojectscount = this.state.projectdata.filter(
      (f) => f.status !== "completed"
    ).length;

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
        <Card.Header style={{ backgroundColor: "#70449d", height: "70px" }}>
          <h3 style={{ color: "white", marginTop: "12px", marginLeft: "5px" }}>
            Team Projects
          </h3>
        </Card.Header>
        <Card.Body
          style={{
            backgroundColor: "#2b292e",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "0px",
          }}
        >
          <div style={{ backgroundColor: "#353239", width: "99.7%" }}>
            <Form style={{ marginLeft: "100px" }}>
              <Row
                className="align-items-center"
                style={{ paddingTop: "12px", marginLeft: "5px" }}
              >
                <Col xs="auto">
                  <Form.Control
                    style={{ border: "none", borderRadius: "0px" }}
                    className="mb-2"
                    placeholder="Filter"
                    name="searchproject"
                    value={this.state.searchproject}
                    onChange={(e) => this.searchfield(e)}
                  />
                </Col>
                <Col xs="auto">
                  <Form.Check
                    style={{ color: "white" }}
                    type="checkbox"
                    id={this.state.check_completd}
                    className="mb-2"
                    label="Completed"
                    checked={this.state.check_completd}
                    onChange={(e) => this.checkCompletd(e, "check_completd")}
                  />
                </Col>
              </Row>
            </Form>
          </div>
          <Container style={{ marginTop: "50px" }}>
            <p
              style={{
                textAlign: "left",
                fontSize: "25px",
                fontWeight: "bold",
                marginLeft: "102px",
                color: "white",
              }}
            >
              You have {compltedprojectscount} Projects left
            </p>
            <Table
              borderless
              size="sm"
              m
              style={{
                color: "white",
                width: "80%",
                margin: "10px 10% 10px 10%",
              }}
            >
              <tbody>
                {this.state.projectdata && this.state.projectdata.length > 0 ? (
                  this.state.projectdata.map((data, index) => (
                    <tr
                      style={{
                        backgroundColor: "#353239",
                        border: "1px solid #3b383f",
                        height: "70px",
                      }}
                    >
                      <td style={{ width: "20px", paddingTop: "15px" }}>
                        <Form.Check type="checkbox" id="b" />
                      </td>
                      <td style={{ paddingTop: "15px" }}>{data.name}</td>
                      <td style={{ width: "100px", paddingTop: "15px" }}>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            this.removerow(index);
                          }}
                        >
                          Remove
                        </p>
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>No Data Found</p>
                )}
              </tbody>
            </Table>
            <div>
              <Form style={{ marginLeft: "101px" }}>
                <FormGroup role="form">
                  <Row
                    className="align-items-center"
                    style={{ paddingTop: "12px", marginLeft: "1px" }}
                  >
                    <Col xs="auto" style={{ paddingLeft: "0px" }}>
                      <Form.Control
                        style={{ border: "none", borderRadius: "0px" }}
                        className="mb-2"
                        id="inlineFormInput"
                        name="projectname"
                        value={this.state.projectname}
                        onChange={(e) => this.onchange(e, "projectname")}
                        placeholder="Add New Project"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button
                        type="submit"
                        className="mb-2"
                        onClick={this.submitform}
                        style={{
                          backgroundColor: "#70449d",
                          borderRadius: "0px",
                          border: "none",
                        }}
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
            </div>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default Team;
