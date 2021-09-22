import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './events/event-reducer';

const store = configureStore({
  reducer: {
    items: eventReducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
});

export default store;
