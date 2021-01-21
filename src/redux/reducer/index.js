import { combineReducers } from 'redux';
import users from './users';
import status from './status';

const reducer = combineReducers({
    params: () => ({
        rowHeight: 40,
        visibleRows: 10
    }),
    status,
    users,
});

export default reducer;