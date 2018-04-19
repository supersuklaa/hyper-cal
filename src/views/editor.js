import { h } from "hyperapp"
import { actions } from "../actions"

export const EditorItem = ({ editor, showForm }) => {
  const content = showForm ? (
    <CreateEventForm editor={editor} />
  ) : (
    <EventList />
  )

  return (
    <div class="editor">
      {content}
    </div>
  )
}

const EventList = ({ }) => (state, actions) => (
  <div class="event-list ">
    {state.events.map(({ name, start }) => (
      <EventListItem name={name} start={start} />
    ))}
    {state.events.length < 1 &&
      <EmptyListItem />
    }
    <CreateEventButton />
  </div>
)

const EmptyListItem = ({ }) => (state, actions) => {
  return state.editor.id ? (
    <div class="empty-list-item">
      <p>
        Seem like there is nothing worth mentioning happening :(
      </p>
      <p>
        Make something great happen by clicking + sign below!
      </p>
    </div>
  ) : (
    <div class="empty-list-item">
      <p>
        Pick a date you like!
      </p>
    </div>
  )
}

const CreateEventButton = ({ }) => (state, actions) => {
  if (!state.editor.id) {
    return null
  }

  return (
    <div class="show-form-button" onclick={() => actions.showForm()}>
      +
    </div>
  )
}

const EventListItem = ({ name, start }) => (
  <div class="event-list-item">
    <div class="start">{start}</div>
    <div class="name">{name}</div>
  </div>
)

const CreateEventForm = ({ editor }) => (
  <div class="create-event">
    <NameInput />
    <StartTimeInput />
    <div class="buttons">
      <CancelButton editor={editor} />
      <ConfirmButton id={editor.id} />
    </div>
  </div>
)

const NameInput = ({ }) => (state, actions) => (
  <div class="create-event-name create-event-input-holder">
    <div>
      Name:
    </div> 
    <div>
      <input
        type="text"
        onchange={e => actions.setName(e.target.value)}
      />
    </div> 
  </div>
)

const StartTimeInput = ({ }) => (state, actions) => (
  <div class="create-event-start create-event-input-holder">
    <div>
      Start: 
    </div> 
    <div>
      <input
        type="time"
        onchange={e => actions.setStartTime(e.target.value)}
      />
    </div> 
  </div>
)

const CancelButton = ({ editor }) => (state, actions) => (
  <div class="cancel-button" onclick={() => actions.renderEditor(editor)}>
    Cancel
  </div>
)

const ConfirmButton = ({ id }) => (state, actions) => (
  <div class="confirm-button" onclick={() => actions.createEvent(id)}>
    Confirm
  </div>
)