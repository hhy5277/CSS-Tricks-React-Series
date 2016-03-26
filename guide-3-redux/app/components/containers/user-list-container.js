import React from 'react';
import { connect } from 'react-redux';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const UserListContainer = React.createClass({

  componentDidMount: function() {
    userApi.getList()
      .then((response) => {
        store.dispatch(loadSearchLayout('User Results', response.data.length))
      });
  },

  render: function() {
    return (
      <UserList users={this.props.users} deleteUser={userApi.deleteUser} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);