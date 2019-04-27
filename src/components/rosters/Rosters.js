// Homepage.js

import React, { Component } from "react";

// calendar
import Calendar from "react-calendar";

// bootstrap components
import { Container, Row, Col, Alert, Button, Badge, Table, ListGroup, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'


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

export default class Rosters extends Component {
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
                    <td>Friday</td>
                    <td>26/04/19</td>
                    <td>
                      <Button variant="outline-primary btn-sm">View Rosters</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>04/05/19</td>
                    <td>
                      <Button variant="outline-primary btn-sm">View Rosters</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>11/05/19</td>
                    <td>
                      <Button variant="outline-primary btn-sm">View Rosters</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <hr />
              <h5>Upcoming Rosters for Fridays</h5>
              <p>
                If you forgot to sign in you can edit your attendance under the
                manage menu above, this data is used for aggregated and
                individual reporting.
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
                    <td>Fri 26/04/19</td>
                    <td><Badge variant="primary">1/14</Badge></td>
                    <td>Booked (Front Desk)</td>
                    <td>
                    <Button variant="outline-secondary btn-sm">Edit</Button>{" "}
                    <Button variant="outline-danger btn-sm">Cancel</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Fri 26/04/19</td>
                    <td><Badge variant="primary">1/14</Badge></td>
                    <td></td>
                    <td>
                    <Button variant="outline-primary btn-sm">Sign-up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Fri 26/04/19</td>
                    <td><Badge variant="primary">1/14</Badge></td>
                    <td></td>
                    <td>
                    <Button variant="outline-primary btn-sm">Sign-up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Fri 26/04/19</td>
                    <td><Badge variant="primary">1/14</Badge></td>
                    <td></td>
                    <td>
                    <Button variant="outline-primary btn-sm">Sign-up</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Fri 26/04/19</td>
                    <td><Badge variant="primary">1/14</Badge></td>
                    <td></td>
                    <td>
                    <Button variant="outline-primary btn-sm">Sign-up</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <ButtonGroup>
                <Button size="sm" variant="secondary">1</Button>
                <Button size="sm" variant="secondary">2</Button>
                <Button size="sm" variant="secondary">3</Button>
                <Button size="sm" variant="secondary">4</Button>
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
