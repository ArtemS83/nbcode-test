import { render } from '@testing-library/react';
import reducer from 'redux/events/event-reducer';

import AddEventForm from '../Button';
import { addEvent } from 'redux/events/event-actions';

describe('AddEventForm', () => {
  it('AddEventForm should render properly', () => {
    const { container } = render(<AddEventForm />);
    expect(container).toMatchSnapshot();
  });

  it('addEvent action should return a new object', () => {
    const newEvent = {
      id: 'f4c7a726-711b-4a55-8c40-1ec53f8f740b',
      firstName: 'Artem',
      lastName: 'Sergieiev',
      email: 'artsergeev83@gmail.com',
      date: '2021-09-23',
    };
    expect(addEvent(newEvent)).toMatchObject({
      type: 'event/addEvent',
      payload: newEvent,
    });
  });

  it('event reducer', () => {
    const initialState = [];
    const action = {
      type: 'event/addEvent',
      payload: {
        id: 'f4c7a726-711b-4a55-8c40-1ec53f8f740b',
        firstName: 'Artem',
        lastName: 'Sergieiev',
        email: 'artsergeev83@gmail.com',
        date: '2021-09-23',
      },
    };
    expect(reducer(initialState, action)).toEqual([
      ...initialState,
      action.payload,
    ]);
  });
});
