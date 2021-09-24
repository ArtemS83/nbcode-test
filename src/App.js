import Container from 'components/Container';
import AddEventForm from 'components/AddEventForm';
import EventsList from 'components/EventsList';

const App = () => {
  return (
    <Container>
      <AddEventForm />
      <EventsList />
    </Container>
  );
};

export default App;
