import { LOAD_USERS, START_FETCHING, LOAD_ERROR, SORT_ASC, SORT_DESC, API_BASE_URI } from './constants';

export const loadUsers = () => async (dispatch, getState) => {

    const state = getState();
    if (!state.status.isFetching) {
        dispatch({
            type: START_FETCHING
        })
    }

    const response = await fetch(API_BASE_URI + '/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-приложение для отображения данных в виде списка. xx-приложение для отображения данных в виде списка. xx%7D&message=%7Blorem%7C32%7D&timestamp={date}&delay=3')
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
