import React from 'react';
import UserData from './UserData';
import { connect } from 'react-redux';

const UserList = ({users, rowHeight, visibleRows}) => {

    const rootRef = React.useRef();
    const [start, setStart] = React.useState(0);

    function getTopHeight() {
        return rowHeight * start;
    }
    function getBottomHeight() {
        return rowHeight * (users.length - (start + visibleRows + 1));
    }

    React.useEffect(() => {
        function onScroll(e) {
        setStart(Math.min(
            users.length - visibleRows - 1,
            Math.floor(e.target.scrollTop / rowHeight)
        ));
        }
        rootRef.current.addEventListener('scroll', onScroll);

        return () => {
        rootRef.current.removeEventListener('scroll', onScroll);
        }
    }, [users.length, visibleRows, rowHeight]);

    return (
        <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
            <div style={{ height: getTopHeight() }}></div>
            <table>
                {/* <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Message</th>
                        <th>TimeStamp</th>
                    </tr>
                </thead> */}
                <tbody>
                    {users.slice(start, start + visibleRows + 1).map(user => <UserData key={user.id} firstName={user.firstName} lastName={user.lastName} message={user.message} timestamp={user.timestamp}/>)}
                </tbody>
            </table>
            <div style={{ height: getBottomHeight() }}></div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        rowHeight: state.params.rowHeight,
        visibleRows: state.params.visibleRows
    });
}

export default connect(mapStateToProps)(UserList);