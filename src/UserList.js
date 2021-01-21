import React from 'react';
import UserData from './UserData';
import { connect } from 'react-redux';
import Down from './DownButton';

const UserList = ({users, rowHeight, visibleRows}) => {

    const rootRef = React.useRef();
    const [start, setStart] = React.useState(0);

    function getTopHeight() {
        return rowHeight * start;
    }
    function getBottomHeight() {
        return rowHeight * (users.length - (start + visibleRows + 1));
    }

    const downClickHandler = () => {
        rootRef.current.scrollTop = rootRef.current.scrollHeight;
    };

    React.useLayoutEffect(() => {
        const rootRefCurrent = rootRef.current;
        function onScroll(e) {
            setStart(Math.min(
                users.length - visibleRows - 1,
                Math.floor(e.target.scrollTop / rowHeight)
            ));
            }
            rootRefCurrent.addEventListener('scroll', onScroll);

            return () => {
                rootRefCurrent.removeEventListener('scroll', onScroll);
            }
    }, [users.length, visibleRows, rowHeight]);

    return (
        <div>
            { (start < users.length - visibleRows - 1) ? <Down handler={downClickHandler}/> :  ''}

            <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
                <div style={{ height: getTopHeight() }}></div>
                <table>
                    <tbody >
                        {users.slice(start, start + visibleRows + 1).map(user => <UserData key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName} message={user.message} timestamp={user.timestamp}/>)}
                    </tbody>
                </table>
                <div style={{ height: getBottomHeight() }}></div>
            </div>
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