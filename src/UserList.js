import React from 'react';
import UserData from './UserData';
import { connect } from 'react-redux';
import Down from './DownButton';
import Sort from './Sort';
import { SORT_ASC_ORDER } from './redux/constants.js';

const UserList = ({users, rowHeight, visibleRows, dateSort}) => {

    const rootRef = React.useRef();
    const [start, setStart] = React.useState(0);
    const [inputValue, setInputValue] = React.useState('')

    const filterUsers = (users) => {
        const inputLowercase = inputValue.toLowerCase();
        return users.filter(user => user.firstName.toLowerCase().indexOf(inputLowercase) !== -1
            || user.lastName.toLowerCase().indexOf(inputLowercase) !== -1);
    };

    const sortUsers = (users) => {
        if (!dateSort) {
            return users;
        }
        users.sort((a, b) => {
            if (dateSort === SORT_ASC_ORDER) {
                return a.millis - b.millis;
            }
            return b.millis - a.millis;
        })
        return users;
    };

    const getTopHeight = () => {
        return rowHeight * start;
    }

    const getBottomHeight = () => {
        const k = filterUsers(users).length - (start + visibleRows + 1);
        return rowHeight * Math.max(0, k);
    }

    const downClickHandler = () => {
        rootRef.current.scrollTop = rootRef.current.scrollHeight;
    };

    const inputHandler = (e) => {
        setInputValue(e.target.value)
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
        <div className="user_list">
            <div className="user_list__controls">
                <input value={inputValue} onChange={inputHandler} placeholder="Filter" />
                <div className="user_list__controls_r">
                    { (start < users.length - visibleRows - 1) ? <Down handler={downClickHandler}/> :  ''}
                    <Sort />
                </div>
            </div>
            <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
                <div style={{ height: getTopHeight() }}></div>
                <table>
                    <tbody >
                        {sortUsers(filterUsers(users)).slice(start, start + visibleRows + 1)
                            .map(user =>
                            <UserData
                                key={user.id}
                                id={user.id}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                message={user.message}
                                timestamp={user.timestamp}
                            />)}
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
        visibleRows: state.params.visibleRows,
        dateSort: state.sort.date
    });
}

export default connect(mapStateToProps)(UserList);