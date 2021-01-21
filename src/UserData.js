import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';

const UserData = ({id, firstName, lastName, message, timestamp, rowHeight}) => {
    const date = new Date(timestamp);
    return (
        <tr className="user_list__row" style={{ height: rowHeight }} >
            <td className="user_list__cell user_list__cell__name">
                {firstName} {lastName}
                <Contacts id={id}/>
            </td>
            <td className="user_list__cell user_list__cell__ellipsis user_list__cell__messsage">
                {message}
            </td>
            <td className="user_list__cell user_list__cell__time">
                {date.toLocaleDateString()}
            </td>
        </tr>
    );
};

const mapStateToProps = (state) => {
    return ({
        rowHeight: state.params.rowHeight,
    });
}

export default connect(mapStateToProps)(UserData);