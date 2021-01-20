import UserList from './UserList';
import { connect } from 'react-redux';
import { loadUsers } from './redux/actions.js';

const App = ({ loadUsers, users }) => {
  return (
      <>
        <h1>React datalist</h1>
        <button onClick={loadUsers}>Load</button>
        <UserList users={users}/>
      </>
    );
}

const mapStateToProps = (state) => {
  return ({
    users: Object.values(state.users)
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
