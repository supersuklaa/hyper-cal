import { h } from 'hyperapp';

export default () => ({ showForm, showDeleteList }) => {
  if (showForm) {
    return (
      <div class='editor'>
        <CreateEventForm />
      </div>
    );
  } else if (showDeleteList) {
    return (
      <div class='editor'>
        <DeleteEventsList />
      </div>
    );
  }

  return (
    <div class='editor'>
      <EventList />
    </div>
  );
};

const DeleteEventsList = () => ({ events, editor }, { selectDelete }) => (
  <div class='event-list'>
    <div class='delete-disclaimer'>
      If you are sure, select the name of the event you want to remove.
    </div>

    <div>
      <select onchange={e => selectDelete(e.srcElement)}>
        <option selected disabled>Choose one</option>
        {events.map(({ name, start }, i) => {
          if (start) {
            return (
              <option value={i}>{start} - {name}</option>
            );
          }
          return (
            <option value={i}>{name}</option>
          );
        })}
      </select>
    </div>

    <div class='buttons'>
      <CancelButton editor={editor} />
      <ConfirmDeleteButton id={editor.id} />
    </div>
  </div>
);

const sorter = (a, b) => {
  const aStart = +a.start.replace(/\D/g, '');
  const bStart = +b.start.replace(/\D/g, '');

  return aStart - bStart;
};

const EventList = () => ({ events, editor }) => (
  <div class='event-list'>
    {events.sort(sorter).map(({ name, start }) => (
      <EventListItem name={name} start={start} />
    ))}
    {events.length < 1 &&
      <EmptyListItem />
    }
    {editor.id &&
      <div class='buttons'>
        <DeleteEventsButton />
        <CreateEventButton />
      </div>
    }
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

const CreateEventButton = () => (state, { showForm }) => (
  <div class='show-form-button' onclick={() => showForm()}>
    Create event
  </div>
);


const DeleteEventsButton = () => ({ events }, actions) => {
  if (events.length > 0) {
    return (
      <div class='remove-events-button' onclick={() => actions.showDeleteList()}>
        Remove event
      </div>
    );
  }

  return null;
};

const EventListItem = ({ name, start }) => () => (
  <div class='event-list-item'>
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
    <div class='label'>
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
    <div class='label'>
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

const ConfirmDeleteButton = ({ id }) => ({ deleteId }, { deleteEvents }) => {
  if (deleteId === null) {
    return null;
  }
  return (
    <div class='confirm-button' onclick={() => deleteEvents(id)}>
      Confirm
    </div>
  );
};
