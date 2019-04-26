// App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from "./components/Homepage";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import UserIndex from "./components/UserIndex";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">Computerbank: Rosters</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#link">Rosters</Nav.Link>
                  <NavDropdown title="Manage" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/manage/user/index">
                      Users
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Rosters
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Settings
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <Button variant="outline-danger">Log out</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/manage/user/create" component={UserCreate} />
            <Route path="/manage/user/edit/:id" component={UserEdit} />
            <Route path="/manage/user/index" component={UserIndex} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
