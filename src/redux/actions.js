import { LOAD_USERS } from './constants';

export const loadUsers = () => async (dispatch, getState) => {
    const response = await fetch('/large')
        .then((res) => res.json());
    dispatch({
        type: LOAD_USERS,
        response
    })
};