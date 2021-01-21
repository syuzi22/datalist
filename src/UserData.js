import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';

const UserData = ({id, firstName, lastName, message, timestamp, rowHeight}) => {

    const [showContacts, changeContactsVisability ] = React.useState(false);

    return (
        <tr style={{ height: rowHeight, cursor: 'pointer', position: 'relative' }} onMouseOver={() => changeContactsVisability(true)} onMouseOut={() => changeContactsVisability(false)}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{message}</td>
            <td>{timestamp}</td>
            <Contacts id={id} show={showContacts}/>
        </tr>
    );
};

const mapStateToProps = (state) => {
    return ({
        rowHeight: state.params.rowHeight,
    });
}

export default connect(mapStateToProps)(UserData);