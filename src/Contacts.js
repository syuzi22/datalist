import React from 'react';
import { connect } from 'react-redux';

const Contacts = ({email, tel}) => {
    return (
        <div className="user_list__tooltip">
            <span>Email: {email}</span>{' '}
            <span>Phone: {tel}</span>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.id
    return ({
        email: state.users[id]['email'],
        tel: state.users[id]['phone']
    });
}

export default connect(mapStateToProps)(Contacts);