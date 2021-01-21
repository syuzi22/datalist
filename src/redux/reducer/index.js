import { combineReducers } from 'redux';
import users from './users';
import status from './status';
import sort from './sort';

const reducer = combineReducers({
    params: () => ({
        rowHeight: 40,
        visibleRows: 10
    }),
    status,
    users,
    sort
});

export default reducer;