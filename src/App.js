import React from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';
import { loadUsers } from './redux/actions.js';

const App = ({ loaded, loadUsers, users, isFetching }) => {

if (!loaded) {
  loadUsers();
}

return (
    <>
      <h1>React datalist</h1>
      {isFetching ? <h2>Loading...</h2> : <UserList users={users}/>}
    </>
  );
}

const mapStateToProps = (state) => {
  return ({
    loaded: state.status.loaded,
    isFetching: state.status.isFetching,
    users: Object.values(state.users)
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
