// EditComponent.js

import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4200/voluser/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ username: response.data.username, full_name: response.data.full_name });
            })
            .catch(function (error) {
                console.log(error);
            })
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
        axios.post('http://localhost:4200/voluser/update/'+this.props.match.params.id, voluser)
        .then(res => console.log(res.data));
        this.setState({
            username: '',
            full_name: ''
        })
        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit Volunteer</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" value={this.state.username} className="form-control" onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input type="text" value={this.state.full_name} className="form-control" onChange={this.onChangeFullName}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}