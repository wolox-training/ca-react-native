import { createStore } from 'redux';

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

export default createStore(reducer, { books: [] });
