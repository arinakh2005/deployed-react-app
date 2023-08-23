import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {

  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  );
}

export default NewMeetupPage;