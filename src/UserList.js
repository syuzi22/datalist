import React from 'react';
import UserData from './UserData';

const UserList = ({users}) => {
    return (
        <div style={{height: '150px', overflow: 'auto'}}>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Message</th>
                        <th>TimeStamp</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <UserData key={user.id} firstName={user.firstName} lastName={user.lastName} message={user.message} timestamp={user.timestamp}/>)}
                </tbody>
            </table>
            <div style={{height: '200px'}}></div>
        </div>
    );
}

export default UserList;