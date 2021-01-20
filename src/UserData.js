import React from 'react';

const UserData = ({firstName, lastName, message, timestamp}) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{message}</td>
            <td>{timestamp}</td>
        </tr>
    );
};

export default UserData;