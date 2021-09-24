import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import styles from './AddEventForm.module.scss';
import Button from '../Button';
import { addEvent } from 'redux/events/event-actions';

const initialState = {
  firstName: '',
  lastName: '',
  date: new Date().toISOString().substring(0, 10),
  email: '',
};

const AddEventForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();

  const { firstName, lastName, date, email } = formState;

  const handleInputChange = e =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  useEffect(() => {
    if (firstName.trim() && lastName.trim() && email.trim() && date) {
      setIsDisabled(false);
      return;
    }
    setIsDisabled(true);
  }, [firstName, lastName, email, date]);

  const resetForm = () => {
    setFormState(initialState);
    setIsDisabled(true);
  };

  const handleAddEvent = e => {
    e.preventDefault();

    const newEvent = {
      id: uuid(),
      firstName,
      lastName,
      email,
      date,
    };
    dispatch(addEvent(newEvent));
    resetForm();
  };
  return (
    <form className={styles.Form} onSubmit={handleAddEvent}>
      <label className={styles.label}>
        First name
        <input
          type="text"
          name="firstName"
          value={firstName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter First name "
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.label}>
        Last name
        <input
          type="text"
          name="lastName"
          value={lastName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter Last name"
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="text"
          name="email"
          value={email}
          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
          title="Enter Email"
          required
          placeholder="Enter Email"
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.label}>
        Event date
        <input
          type="date"
          name="date"
          value={date}
          pattern="\d{4}-\d{2}-\d{2}"
          title="Enter Event date"
          required
          placeholder="Enter Event date"
          onChange={handleInputChange}
        />
      </label>
      <div className={styles.divBtn}>
        <Button title="Reset form" onClick={resetForm} />
        <Button title="Add Event" type="submit" disabled={isDisabled} />
      </div>
    </form>
  );
};

export default AddEventForm;
