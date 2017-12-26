import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <ul>
        {this.props.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
}

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps, actions)(App)