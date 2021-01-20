import { combineReducers } from 'redux';
import users from './users';

const reducer = combineReducers({
    params: () => ({
        rowHeight: 40,
        visibleRows: 10
    }),
    status: () => ({loaded: false}),
    users,
});

export default reducer;