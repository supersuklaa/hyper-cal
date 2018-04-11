import { calendar } from "./calendar"

export const actions = {
  renderMonth: value => state => ({
    months: state.months.concat([{
      year: value.year,
      month: value.month,
      firstDay: calendar.getFirstDay(value.year, value.month),
      days: calendar.getDaysInMonth(value.year, value.month),
    }]),
    next: calendar.getNextMonth(value.year, value.month)
  }),
  openDay: value => state => ({
    editor: {
      display: true,
      value: value
    }
  }),
}