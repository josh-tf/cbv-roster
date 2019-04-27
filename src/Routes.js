// routes.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from "./components/Homepage";
import Rosters from "./components/rosters/Rosters";
import UserCreate from "./components/user/UserCreate";
import UserEdit from "./components/user/UserEdit";
import UserIndex from "./components/user/UserIndex";


class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/rosters/:page?" component={Rosters} />
                <Route exact path="/manage/user/create" component={UserCreate} />
                <Route exact path="/manage/user/edit/:id" component={UserEdit} />
                <Route exact path="/manage/user/index" component={UserIndex} />
            </div>
        )
    }
}

export default Routes