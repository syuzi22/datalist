import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const enhancer = applyMiddleware(
    thunk
);

export default createStore(reducer, enhancer);
