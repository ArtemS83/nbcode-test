import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import styles from './AddEventForm.module.scss';
import Button from '../Button';
import { addEvent } from 'redux/events/event-actions';

const AddEventForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        return;
      case 'lastName':
        setLastName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'date':
        setDate(value);
        return;

      default:
        return;
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setDate('');
  };

  const handleAddEvent = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !date) {
      alert(`Please fill in all fields! `);
      return;
    }
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
        <Button title="Add Event" type="submit" />
      </div>
    </form>
  );
};

export default AddEventForm;
