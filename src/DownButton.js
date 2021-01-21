import React from 'react';

const Down = ({handler}) => {
    return (
        <button className="user_list__controls_button" onClick={handler}>
            Down
        </button>
    );
};

export default Down;