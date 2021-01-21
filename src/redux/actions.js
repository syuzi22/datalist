import { LOAD_USERS, START_FETCHING } from './constants';

export const loadUsers = () => async (dispatch, getState) => {

    const state = getState();
    if (!state.status.isFetching) {
        dispatch({
            type: START_FETCHING
        })
    }

    const response = await fetch('/large')
        .then((res) => res.json());

    dispatch({
        type: LOAD_USERS,
        response
    })
};