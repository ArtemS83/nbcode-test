import PropTypes from 'prop-types';
import styles from './EventItem.module.scss';

const EventItem = ({ item }) => {
  const { firstName, lastName, email, date } = item;
  return (
    <>
      <li className={styles.item}>
        <p className={styles.name}>
          {firstName} {lastName}
        </p>
        <p className={styles.email}>{email}</p>
        <p className={styles.date}>{date}</p>
      </li>
    </>
  );
};

EventItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventItem;
