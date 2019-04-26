// EditComponent.js

import React, { Component } from "react";
import axios from "axios";

// calendar
import Calendar from "react-calendar";

// bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";


class AlertNotice extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        full_name: ""
      };
    }

    render() {
        return(
        <Alert dismissible variant="danger">
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>
          Hello and welcome to the Computerbank Roster system. Please
          note that this app is in beta development stage and may have
          bugs or other issues, if you experience any issues or have
          feedback please <Alert.Link href="#">contact us</Alert.Link>.
        </p>
      </Alert>
      )
    }
}

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      full_name: ""
    };
  }

  render() {
    return (
      <div style={{ marginTop: 25 }}>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col>
            {/* <AlertNotice /> */}

              <h4>Computerbank Rosters</h4>
              <p>
                Welcome to the roster system, to get started select an option
                from the menu above. You can view your current registrations
                below or view a calendar of upcoming rosters on the sidebar.
              </p>
              <hr />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={8}>
              <h5>My Sign-ups</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Days-until</th>
                    <th>Position</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>26/04/19</td>
                    <td>
                      <Badge variant="primary">today</Badge>
                    </td>
                    <td>User Support</td>
                    <td>
                      <Button variant="outline-primary btn-sm">Edit</Button>{" "}
                      <Button variant="outline-danger btn-sm">Cancel</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>04/05/19</td>
                    <td>8 days</td>
                    <td>Front Desk</td>
                    <td>
                      <Button variant="outline-primary btn-sm">Edit</Button>{" "}
                      <Button variant="outline-danger btn-sm">Cancel</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>11/05/19</td>
                    <td>15 days</td>
                    <td>Front Desk</td>
                    <td>
                      <Button variant="outline-primary btn-sm">Edit</Button>{" "}
                      <Button variant="outline-danger btn-sm">Cancel</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <hr />
              <h5>My Attendance</h5>
              <p>
                If you forgot to sign in you can edit your attendance under the
                manage menu above, this data is used for aggregated and
                individual reporting.
              </p>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Position</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Friday</td>
                    <td>26/04/19</td>
                    <td>Front Desk</td>
                    <td>
                      <Badge variant="primary">Attended</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>26/04/19</td>
                    <td>Front Desk</td>
                    <td>
                      <Badge variant="danger">Missed</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>26/04/19</td>
                    <td>Front Desk</td>
                    <td>
                      <Badge variant="primary">Attended</Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <ButtonGroup>
                <Button size="sm" variant="secondary">1</Button>
                <Button size="sm" variant="secondary">2</Button>
                <DropdownButton
                  size="sm"
                  variant="secondary"
                  as={ButtonGroup}
                  title="All"
                  id="bg-nested-dropdown"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Col>
            <Col xs={6} md={4}>
              <h5>Volunteer News</h5>
              <ListGroup>
                <ListGroup.Item>Allan Won the lottery</ListGroup.Item>
                <ListGroup.Item>Updated donation policy</ListGroup.Item>
                <ListGroup.Item>Now open 24/7 to public</ListGroup.Item>
                <ListGroup.Item>Volunteer MIA alert: Lumi</ListGroup.Item>
              </ListGroup>
              <hr />
              <h5>Volunteer Calendar</h5>
              <Calendar />
              <hr />
              <h5>Some other thing</h5>
              <p>xx</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
