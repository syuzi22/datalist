import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';

const UserData = ({id, firstName, lastName, message, timestamp, rowHeight}) => {

    const [showContacts, changeContactsVisability ] = React.useState(false);

    return (
        <tr style={{ height: rowHeight, cursor: 'pointer' }} onMouseOver={() => changeContactsVisability(true)} onMouseOut={() => changeContactsVisability(false)}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td style={{position: 'relative'}}>{message}<Contacts id={id} show={showContacts}/></td>
            <td>{timestamp}</td>
        </tr>
    );
};

const mapStateToProps = (state) => {
    return ({
        rowHeight: state.params.rowHeight,
    });
}

export default connect(mapStateToProps)(UserData);