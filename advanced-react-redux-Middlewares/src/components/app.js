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
        {this.props.users.map(user => <li>{user.name}</li>)}
      </ul>
    );
  }
}

mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps, actions)(App)