import { SORT_ASC, SORT_DESC, SORT_ASC_ORDER, SORT_DESC_ORDER } from './../constants';

const initialState = {
    date: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_ASC:
            return {
                ...state,
                date: SORT_ASC_ORDER
            };
        case SORT_DESC:
            return {
                ...state,
                date: SORT_DESC_ORDER
            };
        default:
            return state;
    }
};

export default reducer;