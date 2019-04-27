// Homepage.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// calendar
import Calendar from "react-calendar";

import moment from "moment";

// bootstrap components
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Badge,
  Table,
  ListGroup,
  Dropdown,
  DropdownButton,
  ButtonGroup
} from "react-bootstrap";
import { strict } from "assert";

class AlertNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      full_name: ""
    };
  }

  render() {
    return (
      <Alert dismissible variant="danger">
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>
          Hello and welcome to the Computerbank Roster system. Please note that
          this app is in beta development stage and may have bugs or other
          issues, if you experience any issues or have feedback please{" "}
          <Alert.Link href="#">contact us</Alert.Link>.
        </p>
      </Alert>
    );
  }
}

function titleCase(str) {
  return str.replace(/(^|\s)\S/g, function(t) {
    return t.toUpperCase();
  });
}

function DummyDate(props) {
  var d = new Date();
  var offset = props.offset > 0 ? props.offset * 7 : 0;

  d.setDate(d.getDate() + ((props.day + 7 - d.getDay()) % 7) + offset);
  return moment(d).format("ddd DD/MM/YY");
}

class GetRoster extends Component {
  render() {
    let selDay = titleCase(this.props.day);
    let startDay;

    // dummy code
    switch (selDay) {
      case "Thursday":
        startDay = 4;
        break;
      case "Friday":
        startDay = 5;
        break;
      case "Saturday":
        startDay = 6;
        // code block
        break;
      default:
      // code block
    }

    return (
      <div>
        <h5>Upcoming Rosters for {selDay}</h5>
        <p>
          If you forgot to sign in you can edit your attendance under the manage
          menu above, this data is used for aggregated and individual reporting.
        </p>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Slots</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DummyDate day={startDay} offset={0} />
              </td>
              <td>
                <Badge variant="primary">1/14</Badge>
              </td>
              <td>
              { startDay == 5 &&
                <div>
                  Booked (Front Desk)
                  </div>
                }


                </td>
              <td>

              { startDay == 5 &&
                <div>
                  <Button variant="outline-secondary btn-sm">Edit</Button>{" "}
                  <Button variant="outline-danger btn-sm">Cancel</Button>
                  </div>
                }
              { !(startDay == 5) &&
                <div>
                  <Button variant="outline-primary btn-sm">Sign-up</Button>
                  </div>
                }

              </td>
            </tr>
            <tr>
              <td>
                <DummyDate day={startDay} offset={1} />
              </td>
              <td>
                <Badge variant="primary">1/14</Badge>
              </td>
              <td />
              <td>
                <Button variant="outline-primary btn-sm">Sign-up</Button>
              </td>
            </tr>
            <tr>
              <td>
                <DummyDate day={startDay} offset={2} />
              </td>
              <td>
                <Badge variant="primary">1/14</Badge>
              </td>
              <td />
              <td>
                <Button variant="outline-primary btn-sm">Sign-up</Button>
              </td>
            </tr>
            <tr>
              <td>
                <DummyDate day={startDay} offset={3} />
              </td>
              <td>
                <Badge variant="primary">1/14</Badge>
              </td>
              <td />
              <td>
                <Button variant="outline-primary btn-sm">Sign-up</Button>
              </td>
            </tr>
            <tr>
              <td>
                <DummyDate day={startDay} offset={4} />
              </td>
              <td>
                <Badge variant="primary">1/14</Badge>
              </td>
              <td />
              <td>
                <Button variant="outline-primary btn-sm">Sign-up</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <ButtonGroup>
          <Button size="sm" variant="secondary">
            1
          </Button>
          <Button size="sm" variant="secondary">
            2
          </Button>
          <Button size="sm" variant="secondary">
            3
          </Button>
          <Button size="sm" variant="secondary">
            4
          </Button>
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
      </div>
    );
  }
}

export default class Rosters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      full_name: ""
    };
  }

  render() {
    let day = this.props.match.params.day;

    return (
      <div style={{ marginTop: 25 }}>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col>
              <AlertNotice />

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
              <h5>Available Rosters</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Next Roster</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Thursday</td>
                    <td>
                      <DummyDate day={4} offset={4} />
                    </td>
                    <td>
                      <Link to="/rosters/thursday/">
                        <Button variant="outline-primary btn-sm">
                          View Rosters
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>
                      <DummyDate day={5} offset={4} />
                    </td>
                    <td>
                    <Link to="/rosters/friday/">
                        <Button variant="outline-primary btn-sm">
                          View Rosters
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>
                      <DummyDate day={6} offset={4} />
                    </td>
                    <td>
                    <Link to="/rosters/saturday/">
                        <Button variant="outline-primary btn-sm">
                          View Rosters
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <hr />
              <GetRoster day={day} />
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
