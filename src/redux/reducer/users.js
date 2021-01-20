import { LOAD_USERS } from './../constants';

const arrToMap = (arr) =>  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                ...arrToMap(action.response)
            };
        default:
            return state;
    }
};

export default reducer;