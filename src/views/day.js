import { h } from "hyperapp"
import { actions } from "../actions"

export const DayItem = ({ day, id }) => (state, actions) => (
  <div class="day" onclick={() => actions.openDay(id)}>
    {day} 
  </div>
)