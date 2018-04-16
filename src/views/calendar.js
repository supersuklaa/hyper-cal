import { h } from "hyperapp"
import { actions } from "../actions"

export const CalendarItem = ({ year, month, firstDay, days }) => (
  <div class="calendar" data-id={year + "-" + month}>
    <div class="table">
    {repeat(firstDay - 1, i =>
      <div class="empty"></div>
    )}
    {repeat(days, i =>
      <DayItem
        date={{
          year: year,
          month: month,
          day: i,
          id: year + "-" + month + "-" + i
        }}
      />
    )}
    </div>
  </div>
)

const DayItem = ({ date }) => (state, actions) => (
  <div class="day" onclick={() => actions.renderEditor(date)}>
    {date.day} 
  </div>
)

const repeat = (length, iteratee) => {

  const out = new Array(length)

  for (let i = 0; i < length; i++) {
    out[i] = iteratee(i+1)
  }

  return out

}   
