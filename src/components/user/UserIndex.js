// IndexComponent.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class UserIndex extends Component {

  constructor(props) {
      super(props);
      this.state = {voluser: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4200/voluser')
      .then(response => {
        this.setState({ voluser: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.voluser.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
      return (
        <div className="container" style={{marginTop: 25}}>
        <h3>Manage Volunteers</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Username</td>
                  <td>Full Name</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }