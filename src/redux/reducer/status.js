import { LOAD_USERS,  START_FETCHING} from './../constants';

const initialState = {
    loaded: false,
    isFetching: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case LOAD_USERS:
            return {
                ...state,
                loaded: true,
                isFetching: false
            };
        default:
            return state;
    }
};

export default reducer;