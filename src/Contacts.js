import React from 'react';
import { connect } from 'react-redux';

const Contacts = ({id, show, email, tel}) => {

    return (
        <>
            {show ?
                <div style={{zIndex: 10, position: 'absolute', top: 0, backgroundColor: '#ededed'}}>
                    <div>{email}</div>
                    <div>{tel}</div>
                </div> :
                <div />
            }

        </>
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