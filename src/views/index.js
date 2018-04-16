import { h } from "hyperapp"
import { actions } from "../actions"
import { HeaderItem } from "./header"
import { CalendarItem } from "./calendar"
import { EditorItem } from "./editor"

export const view = (state, actions) => (
  <div id="holder">
    <HeaderItem
      year={state.calendar.year}
      month={state.calendar.month}
    />
    <CalendarItem
      year={state.calendar.year}
      month={state.calendar.month}
      firstDay={state.calendar.firstDay}
      days={state.calendar.days}
    />
    <EditorItem
      year={state.editor.year}
      month={state.editor.month}
      day={state.editor.day}
    />
  </div>
)