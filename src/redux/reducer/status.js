import { LOAD_USERS,  START_FETCHING, LOAD_ERROR} from './../constants';

const initialState = {
    loaded: false,
    isFetching: false,
    error: false
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
        case LOAD_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;