import { utils } from "./utils"

export const actions = {
  // init: () => (state, actions) => {


  //   actions.renderCalender({
  //     year: d.getFullYear(),
  //     month: d.getMonth() + 1
  //   })

  //   actions.renderEditor({
  //     year: d.getFullYear(),
  //     month: d.getMonth() + 1,
  //     day: d.getDate()
  //   })

  // },

  nav: value => (state, actions) => {
    if (value === "next")
      actions.next()
    else if (value === "prev")
      actions.prev()
  },

  next: () => (state, actions) => {
    actions.renderCalender(
      utils.getNextMonth(state.calendar)
    )
  },

  prev: () => (state, actions) => {
    actions.renderCalender(
      utils.getPrevMonth(state.calendar)
    )
  },

  renderCalender: value => state => ({
    calendar: {
      year: value.year,
      month: value.month,
      firstDay: utils.getFirstDay(value.year, value.month),
      days: utils.getDaysInMonth(value.year, value.month),
    }
  }),

  renderEditor: value => state => ({
    editor: value
  }),

}