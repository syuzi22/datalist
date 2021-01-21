import { LOAD_USERS } from './../constants';

const arrToMap = (arr) =>  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            const users = arrToMap(action.response.map(user => ({...user, millis: Date.parse(user.timestamp)})));
            return {
                ...state,
                ...users,
            };
        default:
            return state;
    }
};

export default reducer;