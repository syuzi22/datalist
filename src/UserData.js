import React from 'react';
import { connect } from 'react-redux';

const UserData = ({firstName, lastName, message, timestamp, rowHeight}) => {
    return (
        <tr style={{ height: rowHeight }}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{message}</td>
            <td>{timestamp}</td>
        </tr>
    );
};

const mapStateToProps = (state) => {
    return ({
        rowHeight: state.params.rowHeight
    });
}

export default connect(mapStateToProps)(UserData);