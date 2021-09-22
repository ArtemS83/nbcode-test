import { createReducer } from '@reduxjs/toolkit';
import { addEvent } from './event-actions';

const initialState = [];

export default createReducer(initialState, {
  [addEvent]: (state, action) => [...state, action.payload],
});
