import { h } from "hyperapp"
import { actions } from "../actions"
import { DayItem } from "./day"

export const MonthItem = ({ year, month, firstDay, days }) => (
  <div class="month" data-id={year + "-" + month}>
    <div class="title">
      {year}-{month}
    </div>
    <div class="table">
    {repeat(firstDay - 1, i =>
      <div class="empty"></div>
    )}
    {repeat(days, i =>
      <DayItem day={i} id={year + "-" + month + "-" + i} />
    )}
    </div>
  </div>
)

const repeat = (length, iteratee) => {

  const out = new Array(length)

  for (let i = 0; i < length; i++) {
    out[i] = iteratee(i+1)
  }

  return out

}   
