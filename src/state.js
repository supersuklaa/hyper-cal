import { utils } from "./utils"

const d = new Date()

const curr = {
  year: d.getFullYear(),
  month: d.getMonth() + 1,
  day: d.getDate()
}

export const state = {
  calendar: {
    year: curr.year,
    month: curr.month,
    firstDay: utils.getFirstDay(curr.year, curr.month),
    days: utils.getDaysInMonth(curr.year, curr.month),
  },

  editor: curr
}