import { useSelector } from 'react-redux';
import { getEvents } from '../../redux/events/event-selectors';
import EventItem from '../EventItem';
import styles from './EventsList.module.scss';

const EventsList = () => {
  const events = useSelector(getEvents);

  return (
    <>
      {events.length > 0 ? (
        <ul className={styles.list}>
          {events.map(eventItem => (
            <EventItem key={eventItem.id} item={eventItem} />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>No Enents</p>
      )}
    </>
  );
};

export default EventsList;
