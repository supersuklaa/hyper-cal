import { h } from "hyperapp"
import { actions } from "../actions"

export const EditorItem = ({ year, month, day }) => (
  <div class="editor">
    {/* <h2>{day}.</h2> */}
    <EventList id={year + "-" + month + "-" + day} />
    <CreateEventForm id={year + "-" + month + "-" + day} />
    <ShowFormButton />
  </div>
)

const EventList = ({ id }) => (state, actions) => (
  <ul class={"event-list " + formClass(!state.showForm)}>
    {state.events.map(({ name, start }) => (
      <li><a href="#">{name}</a> {start}</li>
    ))}
  </ul>
)

const ShowFormButton = ({ }) => (state, actions) => (
  <div class="show-form-button" onclick={() => actions.showForm()}>
    +
  </div>
)

const CreateEventForm = ({ id }) => (state, actions) => (
  <div class={"create-event " + formClass(state.showForm)}>
    <NameInput />
    <StartTimeInput />
    <ConfirmButton id={id} />
  </div>
)

const NameInput = ({ }) => (state, actions) => (
  <div>
    Name: 
    <input
      type="text"
      placeholder="The event"
      onchange={e => actions.setName(e.target.value)}
    />
  </div>
)

const StartTimeInput = ({ }) => (state, actions) => (
  <div>
    Start: 
    <input
      type="time"
      onchange={e => actions.setStartTime(e.target.value)}
    />
  </div>
)

const ConfirmButton = ({ id }) => (state, actions) => (
  <div class="confirm-button" onclick={() => actions.createEvent(id)}>
    Confirm
  </div>
)

const formClass = d => d ? "show" : "hidden"