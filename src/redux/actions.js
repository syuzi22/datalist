import { LOAD_USERS, START_FETCHING, LOAD_ERROR, SORT_ASC, SORT_DESC } from './constants';

export const loadUsers = () => async (dispatch, getState) => {

    const state = getState();
    if (!state.status.isFetching) {
        dispatch({
            type: START_FETCHING
        })
    }

    const response = await fetch('/large')
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            }else {
                return null;
            }
    });

    if (!response) {
        dispatch({
            type: LOAD_ERROR,
        })
    } else {
        dispatch({
            type: LOAD_USERS,
            response
        })
    }

};

export const sortASC = () => ({
    type: SORT_ASC
});

export const sortDESC = () => ({
    type: SORT_DESC
});