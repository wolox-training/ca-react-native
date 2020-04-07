import { createStore, applyMiddleware } from 'redux';

import booksList from '../constants/data';

const reducer = (state, action) => {
  if (action.type === 'GET_BOOKS') {
    return {
      ...state,
      books: booksList
    };
  }
  return state;
};

const logger = store => next => action => {
  console.warn('dispatching', action);
  const result = next(action);
  console.warn('next state', store.getState());
  return result;
};

export default createStore(reducer, { books: [] }, applyMiddleware(logger));
