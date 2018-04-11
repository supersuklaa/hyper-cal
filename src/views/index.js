import { h } from "hyperapp"
import { actions } from "../actions"
import { MonthItem } from "./month"
import { EditorItem } from "./editor"

const current = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1
}

export const view = (state, actions) => (
  <div id="holder" oncreate={() => actions.renderMonth(current)}>
    {state.months.map(({ year, month, firstDay, days }) => (
      <MonthItem year={year} month={month} firstDay={firstDay} days={days} />
    ))}
    <button onclick={() => actions.renderMonth(state.next)}>Next month</button>
    <EditorItem editor={state.editor} />
  </div>
)