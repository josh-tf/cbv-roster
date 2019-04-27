// CreateComponent.js

import React, { Component } from 'react';
const axios = require('axios');

export default class UserCreate extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            full_name: ''
        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeFullName(e) {
        this.setState({
            full_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const voluser = {
            username: this.state.username,
            full_name: this.state.full_name
        }
        axios.post('http://localhost:4200/voluser/add', voluser)
        .then(res => console.log(res.data));
        this.setState({
            username: '',
            full_name: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Volunteer</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:  </label>
                        <input type="text" value={this.state.username} className="form-control" onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input type="text" value={this.state.full_name} className="form-control" onChange={this.onChangeFullName}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}