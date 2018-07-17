import { h } from 'hyperapp';

export default () => ({ showForm }) => {
  if (showForm) {
    return (
      <div class='editor'>
        <CreateEventForm />
      </div>
    );
  }

  return (
    <div class='editor'>
      <EventList />
    </div>
  );
};

const EventList = () => ({ events }) => (
  <div class='event-list'>
    {events.map(({ name, start }) => (
      <EventListItem name={name} start={start} />
    ))}
    {events.length < 1 &&
      <EmptyListItem />
    }
    <div class='buttons'>
      <CreateEventButton />
    </div>
  </div>
);

const EmptyListItem = () => ({ editor }) => {
  if (editor.id) {
    return (
      <div class='empty-list-item'>
        <p>
          Seem like there is nothing worth mentioning happening :(
        </p>
        <p>
          Make something great happen by clicking + sign below!
        </p>
      </div>
    );
  }

  return (
    <div class='empty-list-item'>
      <p>
        Pick a date you like!
      </p>
    </div>
  );
};

const CreateEventButton = () => ({ editor }, { showForm }) => {
  if (!editor.id) {
    return null;
  }

  return (
    <div class='show-form-button' onclick={() => showForm()}>
      +
    </div>
  );
};

// const RemoveEventsButton = () => (state, actions) => {
//   if (state.events.length < 1) {
//     return null;
//   }

//   return (
//     <div class='remove-events-button' onclick={() => actions.showForm()}>
//       -
//     </div>
//   );
// };

const EventListItem = ({ name, start }) => (state, { hilightEvent }) => (
  <div class='event-list-item' onclick={() => hilightEvent('hellou')}>
    <div class='start'>{start}</div>
    <div class='name'>{name}</div>
  </div>
);

const CreateEventForm = () => ({ editor }) => (
  <div class='create-event'>
    <NameInput />
    <StartTimeInput />
    <div class='buttons'>
      <CancelButton editor={editor} />
      <ConfirmButton id={editor.id} />
    </div>
  </div>
);

const NameInput = () => (state, { setName }) => (
  <div class='create-event-name create-event-input-holder'>
    <div>
      Name:
    </div>
    <div>
      <input
        type='text'
        onchange={e => setName(e.target.value)}
      />
    </div>
  </div>
);

const StartTimeInput = () => (state, { setStartTime }) => (
  <div class='create-event-start create-event-input-holder'>
    <div>
      Start:
    </div>
    <div>
      <input
        type='time'
        onchange={e => setStartTime(e.target.value)}
      />
    </div>
  </div>
);

const CancelButton = ({ editor }) => (state, { renderEditor }) => (
  <div class='cancel-button' onclick={() => renderEditor(editor)}>
    Cancel
  </div>
);

const ConfirmButton = ({ id }) => (state, { createEvent }) => (
  <div class='confirm-button' onclick={() => createEvent(id)}>
    Confirm
  </div>
);
