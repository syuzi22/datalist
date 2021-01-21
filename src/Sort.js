import React from 'react';
import { connect } from 'react-redux';
import { sortASC, sortDESC } from './redux/actions.js';
import { SORT_ASC_ORDER, SORT_DESC_ORDER } from './redux/constants.js';

const Sort = ({sortASC, sortDESC, dateSort}) => {
    const clickHandler = () => {
        if (dateSort === SORT_ASC_ORDER || dateSort === null) {
            sortDESC();
        } else if (dateSort === SORT_DESC_ORDER || dateSort === null) {
            sortASC();
        }
    }
    return (
        <span className="sort">
            Sort by:{' '}
            <b style={{cursor: 'pointer'}} className={`sort__arrow sort__arrow_${ dateSort }`} onClick={clickHandler}>Date</b>
        </span>
    );
};

const mapStateToProps = (state) => {
    return ({
        dateSort: state.sort.date
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortASC: () => dispatch(sortASC()),
        sortDESC: () => dispatch(sortDESC()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);