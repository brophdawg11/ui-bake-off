import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas';

const reducer = function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1 });
    case 'INCREMENT_IF_ODD':
      if (state % 2 !== 0) {
          return Object.assign({}, state, { count: state.count + 1 });
      }
      return state;
    case 'DECREMENT':
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state
  }
}


const initialState = {
    count: 0,
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
