import React from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';
import { loadUsers } from './redux/actions.js';

const App = ({ loaded, loadUsers, error, users, isFetching }) => {

if (error) {
  return (<div>К сожалению, информация не найдена</div>);
}

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
    error: state.status.error,
    users: Object.values(state.users)
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
